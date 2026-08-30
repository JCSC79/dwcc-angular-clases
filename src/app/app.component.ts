import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContidoComponent } from './contido/contido.component';

/**
 * Componente que demuestra Componentes
 * 
 * Bloques reutilizables que encapsulan lógica, plantilla y estilos
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title: propiedade que almacena un valor
  title = '03-Compoñentes';
}
