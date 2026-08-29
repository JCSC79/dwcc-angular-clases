import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';
  // Exemplos de datos que transformaremos mediante pipes
  texto: string = 'Ola mundo!';
  hoxe: Date = new Date();
  numero: number = 12.548523;
  porcentaxe = 0.4578;
  cartos = 1800;
}