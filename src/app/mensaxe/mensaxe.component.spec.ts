import { ComponentFixture, TestBed } from '@angular/core/testing'; // Bibliotecas mínimas necesarias para probas (créanse con Jasmine -framework de probas- e testéanse con Karma -test runner-)
import { MensaxeComponent } from './mensaxe.component';
import { By } from '@angular/platform-browser';

// Definimos a suite (o conxunto) de probas que queremos realizar sobre a compoñente MensaxeComponent
describe('MensaxeComponent', () => {
  let componhente: MensaxeComponent; // Gardamos a referencia a unha instancia da compoñente
  let banco: ComponentFixture<MensaxeComponent>; // Representación da compoñente dentro da proba (banco de probas)

  // Definimos que accións se realizarán antes de cada proba
  beforeEach(() => {
    banco = TestBed.createComponent(MensaxeComponent); // Créase unha instancia da compoñente
    componhente = banco.componentInstance; // Obtense a referencia á instancia dende o banco de probas
    banco.detectChanges(); // Renderizamos a vista para aplicar os cambios que puideran ter ocorrido na mesma
  });

  // PROBA 1: Comprobar que a compoñente foi creada correctamente
  it('debería crearse a compoñente', () => {
    expect(componhente).toBeTruthy(); // Se a compoñente existe e non é nula, pasa a proba
  });

  // PROBA 2: Verificar que a mensaxe predeterminada se renderiza no HTML
  it('debería amosar a mensaxe "Ola mundo!', () => {

    // Recuperamos a referencia aos elementos de tipo parágrafo do documento mediante o seu selector CSS
    let elemento = banco.debugElement.query(By.css('p')).nativeElement;

    // Se o elemento de parágrafo contén o texto 'Ola mundo!', pasa a proba
    expect(elemento.textContent).toContain('Ola mundo!');
  });

  // PROBA 3: Comprobar que se pode cambiar a mensaxe dinamicamente
  it('debería actualizar a mensaxe cando cambia a propiedade "mensaxe"', () => {
    componhente.mensaxe = 'Facendo probas unitarias en Angular!'; // Cambiamos o valor da propiedade "mensaxe" na compoñente
    banco.detectChanges(); // Renderizamos a vista para aplicar os cambios que puideran ter ocorrido na mesma

    // Recuperamos a referencia aos elementos de tipo parágrafo do documento mediante o seu selector CSS
    let elemento = banco.debugElement.query(By.css('p')).nativeElement;

        // Se o elemento de parágrafo contén o novo texto, pasa a proba
    expect(elemento.textContent).toContain('Facendo probas unitarias en Angular!');
  });
});
