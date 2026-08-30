import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

/**
 * Componente que demuestra Two-Way Binding (Enlazado Bidireccional)
 * 
 * Sincronización automática de datos entre el componente y la plantilla con [(ngModel)]
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title: propiedade que almacena un valor
  title: string = '17-enlazado-bidireccional';

  resetearTitulo() {
    this.title = '17-enlazado-bidireccional';
  }
}
