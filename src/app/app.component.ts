import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('estadoMenu', [
      state('oculto', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('oculto <=> visible', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Menú Despregable Animado';
  menuVisible: boolean = false;

  alternarVisibilidade(): void {
    this.menuVisible = !this.menuVisible;
  }
}
