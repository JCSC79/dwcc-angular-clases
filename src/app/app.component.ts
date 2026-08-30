import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente que demuestra la interpolación de strings en Angular
 * 
 * La interpolación es la técnica de insertar expresiones dinámicas en el HTML
 * usando la sintaxis {{ expresión }}
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],  // Incluimos CommonModule para usar directivas como *ngFor
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Título de la aplicación
  title = 'T05E03 - Interpolación de Strings y Expresiones';
  
  // Variables numéricas para demostar operaciones en interpolación
  numero1: number = 12;
  numero2: number = 27;
  
  /**
   * Objeto con propiedades que se accederán en la plantilla
   * Demuestra cómo acceder a propiedades anidadas: obxecto.nome, obxecto.idade
   */
  obxecto: any = {
    nome: 'Pepito Castro',
    idade: 22
  };
  
  /**
   * Array de strings que se iterarán con *ngFor
   * Demuestra cómo trabajar con colecciones en la plantilla
   */
  fases: string[] = ["Chea", "Menguante", "Nova", "Creciente"];
}
