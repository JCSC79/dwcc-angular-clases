import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente que demuestra Event Binding en Angular
 * Event Binding permite capturar eventos del usuario como clics, cambios, etc.
 * usando la sintaxis (evento)="método()"
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Título inicial de la aplicación
  title = 'T05E05 - Event Binding (Enlazado de Eventos)';
  
  // Variable que almacena el color actual (azul inicial)
  cor: string = "blue";

  /**
   * Método que se ejecuta cuando el usuario cambia el estado del checkbox
   * Cambia el título del componente para indicar que el evento fue disparado
   */
  mudarTitulo(): void {
    this.title = 'El evento (change) fue disparado!';
  }

  /**
   * Método que se ejecuta cuando el usuario hace clic en el botón
   * Alterna el color entre azul y púrpura
   */
  mudarCor(): void {
    if (this.cor === "blue") {
      this.cor = "purple";
    } else {
      this.cor = "blue";
    }
  }
}
