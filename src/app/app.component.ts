import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementoSimpleComponent } from './elemento-simple/elemento-simple.component';

/**
 * Componente que demuestra Componente de Angular
 * 
 * Demuestra conceptos de Angular
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ElementoSimpleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title: propiedade que almacena un valor
  title = '01-OlaMundo';
}
