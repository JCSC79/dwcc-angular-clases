import { Component } from '@angular/core';
import { FillaComponent } from './filla/filla.component';

/**
 * Componente que demuestra @Output - Eventos Personalizados
 * 
 * Emitir eventos desde componente hijo al padre usando @Output
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FillaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title: propiedade que almacena un valor
  title = '19-output';
  recibida: string = "";

  amosarMensaxe(texto: string): void {
    this.recibida = texto;
  }
}
