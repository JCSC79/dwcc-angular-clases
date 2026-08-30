import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente principal de la aplicación
 * Demuestra los conceptos básicos de TypeScript en Angular:
 * - Declaración de variables con tipos explícitos
 * - Inicialización de propiedades de clase
 * - Interpolación de datos en plantillas
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Título de la aplicación que se mostrará en la plantilla HTML
  title = 'T05E01 - Introducción a TypeScript en Angular';

  // Propiedad de tipo 'number' inicializada con un valor numérico
  // TypeScript garantiza que siempre será un número
  numero1: number = 5;

  /**
   * Propiedad de tipo 'number' NO inicializada en la declaración
   * NOTA: Para usar propiedades sin inicializar, es necesario configurar en tsconfig.json:
   *       "strictPropertyInitialization": false
   * Esto desactiva la verificación estricta de inicialización de TypeScript
   */
  numero2: number;

  constructor() {
    // Inicializamos numero2 en el constructor
    this.numero2 = 10;
  }
}
