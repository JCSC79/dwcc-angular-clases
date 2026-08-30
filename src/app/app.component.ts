import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompoCComponent } from './compo-c/compo-c.component';

/**
 * Componente que demuestra Estilos en Componentes
 * 
 * Aislamiento de estilos CSS dentro de componentes Angular
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompoCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title: propiedade que almacena un valor
  title = '01-OlaMundo';
}
