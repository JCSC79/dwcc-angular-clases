import { Component } from '@angular/core';
import { ConversadorComponent } from './conversador/conversador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConversadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exercicio de Repaso: Simulación de Chat';
}
