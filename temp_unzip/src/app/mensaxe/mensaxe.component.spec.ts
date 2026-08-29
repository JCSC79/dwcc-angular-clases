import { ComponentFixture, TestBed } from '@angular/core/testing'; // Bibliotecas mínimas necesarias para realizar probas unitarias (créanse con Jasmine -framework de probas- e testéanse con Karma -test runner-)
import { MensaxeComponent } from './mensaxe.component';
import { bootstrapAppScopedEarlyEventContract } from '@angular/core/primitives/event-dispatch';
import { By } from '@angular/platform-browser';

// Definimos a suite (o conxunto) de probas que queremos realizar sobre a compoñente MensaxeComponent.
describe('MensaxeComponent', () => {
  let componhente: MensaxeComponent; // Gardamos a referencia a unha instancia da compoñente (sobre a que se vai probar)
  let banco: ComponentFixture<MensaxeComponent>; // Representación da compoñente dentro da proba (banco de probas)

  // Definimos as accións que se van realizar antes de cada proba
  beforeEach(() => {
    banco = TestBed.createComponent(MensaxeComponent); // Creamos unha instancia da compoñente
    componhente = banco.componentInstance; // Obtemos a referencia á instancia a través do banco de probas
    banco.detectChanges(); // Renderizamos a vista para aplicar os cambios que puideran ter ocorrido na mesma
  });

  // PROBA 1: comprobar que a compoñente se crea correctamente
  it('debería crearse a compoñente', () => {
    expect(componhente).toBeTruthy(); // Se a compoñente existe e non é nula, entón pasa a proba
  })

  // PROBA 2: verificar que a mensaxe predeterminada se renderiza no HTML
  it('debería amosar a mensaxe "Ola mundo!"', () => {
    // Recuperamos a referencia aos elementos de tipo parágrafo no documento mediante o seu selector CSS
    let elemento = banco.debugElement.query(By.css('p')).nativeElement;
    // Comprobamos que o contido do parágrafo é a mensaxe predeterminada (Ola mundo!)
    expect(elemento.textContent).toBe('Ola mundo!');
  });

  // PROBA 3: comprobar que se pode cambiar a mensaxe dinamicamente
  it('debería actualizarse a mensaxe cando cambia o valor da propiedade "mensaxe"', () => {
    componhente.mensaxe = "Facendo probas unitarias en Angular!"; // Cambiamos o valor da propiedade "mensaxe" da compoñente
    banco.detectChanges(); // Renderizamos a vista para aplicar os cambios que puideran ter ocorrido na mesma
    let elemento = banco.debugElement.query(By.css('p')).nativeElement; // Tomamos todos os elementos de tipo parágrafo
    // Comprobamos que o contido do parágrafo é a mensaxe actualizada (Facendo probas unitarias en Angular!)
    expect(elemento.textContent).toBe('Facendo probas unitarias en Angular!');
  });
});
