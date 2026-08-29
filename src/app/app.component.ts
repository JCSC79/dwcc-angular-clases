import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('estadoBoton', [
      state('normal', style({
        transform: 'scale(1)',
        backgroundColor: 'blue',
        color: 'white'
      })),
      state('premido', style({
        transform: 'scale(1.2)',
        backgroundColor: 'red',
        color: 'yellow'
      })),
      transition('normal <=> premido', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Botón Animado';
  premido: boolean = false;

  alternarEstado() {
    this.premido = !this.premido;
  }
}
