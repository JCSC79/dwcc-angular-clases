import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
  standalone: true
})
export class ResaltarDirective {
  @Input() fondo: string = 'yellow'; // Cor que se aplicará ao pasar o rato (pódese modificar dende o HTML -se non a modificamos colle o valor por defecto 'yellow'-)
  private corOrixinal: string = ''; // Esta propiedade gardará a cor que tiña orixinalmente o elemento para que no se perda

  // No construtor declaramos unha propiedade de tipo ElementRef que referirá ao propio elemento HTML sobre o que se aplica a directiva, e unha propiedade de tipo Renderer2 que permite modificar estilos de manera segura
  constructor(private elemento: ElementRef, private renderizador: Renderer2) {}

  // Ao pasar o rato por riba do elemento cambiamos a cor á recibida a través da propiedade 'fondo'
  @HostListener('mouseenter') onMouseEnter() {
    // Gardamos a cor de fondo actual para poder restaurala despois
    this.corOrixinal = this.elemento.nativeElement.style.backgroundColor;

    // Aplicamos a nova cor de fondo
    this.renderizador.setStyle(this.elemento.nativeElement, 'backgroundColor', this.fondo);
  }

  // Ao retirar o rato de enriba do elemento recuperamos a cor orixinal
  @HostListener('mouseleave') onMouseLeave() {
    // Recuperamos a cor orixinal
    this.renderizador.setStyle(this.elemento.nativeElement, 'backgroundColor', this.corOrixinal);
  }
}
