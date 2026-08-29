import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appLigado]',
  standalone: true
})
export class LigadoDirective {

  // Esta directiva pon a cor do texto dos elementos aos que se aplique en verde a través de @HostBinding
  @HostBinding('style.color') corTexto: string = 'green';

}
