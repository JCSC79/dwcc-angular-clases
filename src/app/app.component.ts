import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente que demuestra Directiva *ngFor
 * 
 * Iterar sobre arrays para repetir elementos en la plantilla
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
  title = '07-ngFor';
  equipos: string[];

  constructor() {
    this.equipos = ["Celta de Vigo", "Real Madrid", "Barcelona", "Valencia", "Athletic Club", "Atlético de Madrid", "Real Betis Balompié"];
  }
}
