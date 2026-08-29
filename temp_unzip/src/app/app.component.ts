import { Component } from '@angular/core';
import { AutocompletarComponent } from './autocompletar/autocompletar.component';
import { PaxinacionComponent } from './paxinacion/paxinacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AutocompletarComponent, PaxinacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Material';
}
