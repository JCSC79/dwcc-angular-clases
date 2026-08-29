import { Component } from '@angular/core';
import { LigadoDirective } from './directives/ligado.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LigadoDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HostBinding';
}
