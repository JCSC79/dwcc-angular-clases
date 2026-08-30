import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente que demuestra Directiva *ngSwitch
 * 
 * Cambiar entre múltiples opciones basado en una expresión
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
  title = '11-ngSwitch';
  contador: number = 0;
  // continentes: propiedade que almacena un valor
  continentes: string[] = ["África","América","Europa","Asia","Antártida","Oceanía"];
}
