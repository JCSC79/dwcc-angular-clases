import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOcultar]',
  standalone: true
})
export class OcultarDirective {

  // Definimos o comportamento do selector da directiva que chama ao setter "amosar"
  @Input('appOcultar') set amosar(valor: boolean) {
    // Se o valor recibido por input é 'true' poñemos o elemento como visible, en caso contrario ocultámolo
    this.renderizador.setStyle(this.elemento.nativeElement, 'display', valor ? '' : 'none');
  }

  // Engadimos dúas propiedades de clase privadas: elemento fai referencia ao propio elemento HTML ao que se aplica a directiva, e renderizador é o encargador de actualizar a vista
  constructor(private elemento: ElementRef, private renderizador: Renderer2) { }
}