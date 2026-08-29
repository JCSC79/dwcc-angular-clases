import { Component } from '@angular/core';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { PaxinacionComponent } from './paxinacion/paxinacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AutocompleteComponent, PaxinacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-material';
}
