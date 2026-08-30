import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente que demuestra Componente de Angular
 * 
 * Demuestra conceptos de Angular
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
  title = '08-ngFor-v2';
  equipos: string[];
  // division: propiedade que almacena un valor
  division: string;

  constructor() {
    this.equipos = ["Celta de Vigo", "Real Madrid", "Barcelona", "Valencia", "Athletic Club", "Atlético de Madrid", "Real Betis Balompié"];
    this.division = "Primeira";
  }

  mudarDivision() {
    if (this.division == "Primeira") {
      this.division = "Segunda";
      this.equipos = ["Almería","Racing de Ferrol","Deportivo A Coruña","Albacete"];
    } else {
      this.division = "Primeira";
      this.equipos = ["Celta de Vigo", "Real Madrid", "Barcelona", "Valencia", "Athletic Club", "Atlético de Madrid", "Real Betis Balompié"];
    }

  }
}
