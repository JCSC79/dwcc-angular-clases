import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDestacar]',
  standalone: true
})
export class DestacarDirective {
  // Esta propiedade determinará a cor de fondo coa que se destacará o elemento afectado pola directiva
  private corDeFondo: string;
  // Ao aplicar a directiva cambiarase a cor de fondo (se se recibiu un valor, úsase ese, senón úsase o valor por defecto)
  @Input('appDestacar') set cor(valor: string) {
    this.corDeFondo = valor && valor.trim() !== '' ? valor : 'yellow';
  }

  // Engadimos dúas propiedades de clase privadas: elemento fai referencia ao propio elemento HTML ao que se aplica a directiva, e renderizador é o encargador de actualizar a vista
  constructor(private elemento: ElementRef, private renderizador: Renderer2) { }

  // Definimos o comportamento cando o rato pasa por riba do elemento (ponlle unha cor de fondo)
  @HostListener('mouseenter') aoPasarRato() {
    this.renderizador.setStyle(this.elemento.nativeElement, 'backgroundColor', this.corDeFondo);
  }

  // Definimos o comportamento ao sacar o rato de enriba do elemento (quítalle a cor de fondo)
  @HostListener('mouseleave') aoSacarRato() {
    this.renderizador.removeStyle(this.elemento.nativeElement, 'backgroundColor');
  }

}
