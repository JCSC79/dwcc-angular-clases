import { Component } from '@angular/core';
import { FillaComponent } from './filla/filla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FillaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '19-output';
  recibida: string = "";

  amosarMensaxe(texto: string): void {
    this.recibida = texto;
  }
}
