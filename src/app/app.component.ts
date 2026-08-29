import { Component } from '@angular/core';
import { OcultarDirective } from './directives/ocultar.directive';
import { DestacarDirective } from './directives/destacar.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OcultarDirective, DestacarDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directivas Personalizadas';
  // Esta propiedade vai determinar a visibilidade dos elementos que usen a directiva "Ocultar"  
  amosar: boolean = true;
  // Esta propiedade vai determinar o valor dunha cor de fondo
  cor: string = 'lightgreen';
}
