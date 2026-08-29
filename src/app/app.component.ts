import { Component, HostListener } from '@angular/core';
import { FillaComponent } from './filla/filla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FillaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exercicio Repaso Teclado';
  texto: string = '';

  @HostListener('window:keydown', ['$event']) pulsarTecla(evento: KeyboardEvent) {
    this.texto += evento.key;
  }
}
