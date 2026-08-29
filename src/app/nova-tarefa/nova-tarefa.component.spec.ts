import { ComponentFixture, TestBed } from '@angular/core/testing'; // Ferramentas de test de Angular
import { NovaTarefaComponent } from './nova-tarefa.component'; // Importamos a compoñente a probar
import { By } from '@angular/platform-browser'; // Ferramenta para buscar elementos no DOM
import { FormsModule } from '@angular/forms'; // Importamos FormsModule para usar [(ngModel)]

describe('NovaTarefaComponent', () => {
  let component: NovaTarefaComponent; // Instancia da compoñente
  let fixture: ComponentFixture<NovaTarefaComponent>; // "Ambiente" da compoñente para os tests

  // ✅ Antes de cada proba, configuramos o módulo de test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NovaTarefaComponent, FormsModule] // ✅ Importamos a compoñente standalone e FormsModule para [(ngModel)]
    });

    fixture = TestBed.createComponent(NovaTarefaComponent); // Creamos a compoñente para test
    component = fixture.componentInstance; // Obtemos a instancia da compoñente
    fixture.detectChanges(); // Renderizamos a compoñente antes de cada proba
  });

  // ✅ Proba 1: Verificar que a compoñente se crea correctamente
  it('debería crear a compoñente', () => {
    expect(component).toBeTruthy(); // Se a compoñente existe, a proba pasa
  });

  // ✅ Proba 2: Comprobar que se emite unha nova tarefa cando se preme o botón
  it('debería emitir unha nova tarefa ao premer o botón', () => {
    spyOn(component.tarefaEngadida, 'emit'); // ✅ Creamos unha "espiada" para verificar se se chama a `emit()`

    // 🔹 1. Buscamos os elementos do formulario
    const input = fixture.debugElement.query(By.css('input')).nativeElement; // ✅ Buscamos o <input>
    const boton = fixture.debugElement.query(By.css('button')).nativeElement; // ✅ Buscamos o <button>

    // 🔹 2. Simulamos escribir unha tarefa no input
    input.value = 'Nova tarefa';
    input.dispatchEvent(new Event('input')); // ✅ Simulamos o evento `input`
    fixture.detectChanges(); // ✅ Actualizamos a vista tras o cambio

    // 🔹 3. Facemos clic no botón para engadir a tarefa
    boton.click(); // ✅ Simulamos o clic no botón
    fixture.detectChanges(); // ✅ Actualizamos a vista tras o clic

    // 🔹 4. Verificamos que o evento foi emitido co valor correcto
    expect(component.tarefaEngadida.emit).toHaveBeenCalledWith('Nova tarefa'); // ✅ Comprobamos que se emitiu a tarefa co título correcto
  });

  // ✅ Proba 3: Comprobar que o campo se baleira despois de engadir unha tarefa
  it('debería limpar o campo de entrada despois de engadir unha tarefa', (done) => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const boton = fixture.debugElement.query(By.css('button')).nativeElement;

    // 🔹 1. Simulamos escribir unha tarefa
    input.value = 'Tarefa de exemplo';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // 🔹 2. Facemos clic no botón para engadir a tarefa
    boton.click();
    fixture.detectChanges(); // ✅ Forzamos actualización

    // 🔹 3. Esperamos ao seguinte ciclo de detección de cambios
    setTimeout(() => {
      fixture.detectChanges();
      expect(input.value).toBe(''); // ✅ Comprobamos que o input está baleiro
      done(); // ✅ Rematamos a proba asincrónica
    }, 0);
  });

  // ✅ Proba 4: O botón debería estar deshabilitado se o input está baleiro
  it('debería deshabilitar o botón se o input está baleiro', () => {
    const boton = fixture.debugElement.query(By.css('button')).nativeElement;

    // 🔹 O campo está baleiro ao comezo, polo que o botón debería estar deshabilitado
    expect(boton.disabled).toBeTrue();

    // 🔹 Simulamos escribir texto no input
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'Nova tarefa';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // 🔹 Agora o botón debería estar habilitado
    expect(boton.disabled).toBeFalse();
  });

  // ✅ Proba 5: Non debería emitir eventos se o input está baleiro
  it('non debería emitir eventos se o input está baleiro', () => {
    spyOn(component.tarefaEngadida, 'emit'); // ✅ Espiamos o evento

    const boton = fixture.debugElement.query(By.css('button')).nativeElement;

    // 🔹 O botón debería estar deshabilitado ao inicio, pero probamos facelo clic
    boton.click();
    fixture.detectChanges();

    // 🔹 Como o campo estaba baleiro, `emit()` non debería terse chamado
    expect(component.tarefaEngadida.emit).not.toHaveBeenCalled();
  });
});
