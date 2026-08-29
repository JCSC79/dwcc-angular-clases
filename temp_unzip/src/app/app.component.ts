import { Component } from '@angular/core';
import { FillaComponent } from './filla/filla.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FillaComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exercicio Repaso @Input';
  texto: string = '';
}
