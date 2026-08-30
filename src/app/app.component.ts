import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente que demuestra Directiva *ngIf
 * 
 * Mostrar o ocultar elementos basado en una condición
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title: propiedade que almacena un valor
  title = '05-ngIf';
  cargar: boolean; // Declaramos a propiedade de clase de tipo booleano

  constructor() {
    this.cargar = true; // Inicializamos a propiedade "cargar"
  }
}
