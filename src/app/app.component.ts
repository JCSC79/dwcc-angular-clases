import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente principal - "Hola Mundo" en Angular
 * 
 * Este es el primer ejemplo clásico que demuestra:
 * - Creación de un componente Angular básico
 * - Uso del decorador @Component
 * - Conexión entre la clase TypeScript y la plantilla HTML
 */
@Component({
  selector: 'ola-mundo',           // Nombre del elemento HTML que representa este componente
  standalone: true,               // Este componente funciona de forma independiente (Angular 14+)
  imports: [RouterOutlet],         // Importamos las dependencias necesarias
  templateUrl: './app.component.html',  // Ruta del archivo HTML (plantilla)
  styleUrl: './app.component.css'       // Ruta del archivo CSS (estilos)
})
export class AppComponent {
  // Título que puede ser utilizado en la plantilla
  title = 'T05E02 - Hola Mundo en Angular';
  
  // Mensaje de bienvenida
  mensaje = 'Bienvenido a Angular!';
  
  // Para mostrar literalmente la sintaxis {{ }}
  sintaxisInterpolacion = '{{ }}';
}
