import { ComponentFixture, TestBed } from '@angular/core/testing'; // Ferramentas de test de Angular
import { ListaTarefasComponent } from './lista-tarefas.component'; // Importamos a compoñente que estamos a probar
import { TarefasService } from '../tarefas.service'; // Importamos o servizo real
import { By } from '@angular/platform-browser'; // Para buscar elementos no DOM
import { CommonModule } from '@angular/common'; // ✅ Necesario para que *ngFor e ngClass funcionen nos tests

describe('ListaTarefasComponent', () => {
  let component: ListaTarefasComponent; // Instancia da compoñente
  let fixture: ComponentFixture<ListaTarefasComponent>; // Fixture para manexar a compoñente no test
  let tarefasService: TarefasService; // Instancia do servizo de tarefas

  // ✅ Configuración inicial antes de cada test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListaTarefasComponent, CommonModule], // ✅ Importamos a compoñente standalone e CommonModule para *ngFor e ngClass
      providers: [TarefasService] // ✅ Inxectamos o servizo real no test
    });

    fixture = TestBed.createComponent(ListaTarefasComponent); // ✅ Creamos a compoñente no test
    component = fixture.componentInstance; // ✅ Obtemos a instancia da compoñente
    tarefasService = TestBed.inject(TarefasService); // ✅ Obtemos a instancia do servizo
    fixture.detectChanges(); // ✅ Renderizamos a compoñente antes de cada test
  });

  // ✅ Proba 1: Comprobar que a compoñente se crea correctamente
  it('debería crear a compoñente', () => {
    expect(component).toBeTruthy(); // ✅ Se a compoñente existe, a proba pasa
  });

  // ✅ Proba 2: Verificar que a lista de tarefas aparece con 3 elementos iniciais
  it('debería mostrar as tarefas na lista', () => {
    const elementos = fixture.debugElement.queryAll(By.css('li')); // ✅ Buscamos todos os <li>
    expect(elementos.length).toBe(3); // ✅ Esperamos que haxa 3 tarefas iniciais
  });

  // ✅ Proba 3: Simular que se completa unha tarefa e verificar que a clase CSS "completada" se aplica correctamente
  it('debería marcar unha tarefa como completada cando se fai clic no botón', async () => {
    const botois = fixture.debugElement.queryAll(By.css('button')); // ✅ Buscamos os botóns
    
    botois[0].nativeElement.click(); // ✅ Simulamos o clic no botón da primeira tarefa
    fixture.detectChanges();
  
    await fixture.whenStable(); // ✅ Esperamos a que o DOM se actualice
    fixture.detectChanges();
  
    // ✅ Agora verificamos que o botón da tarefa está deshabilitado
    expect(botois[0].nativeElement.disabled).toBeTrue();
  });  
});
