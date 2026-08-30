import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompoAComponent } from './compo-a/compo-a.component';
import { CompoBComponent } from './compo-b/compo-b.component';
import { ServizoService } from './servizo.service';

/**
 * Componente que demuestra Componente de Angular
 * 
 * Demuestra conceptos de Angular
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompoAComponent, CompoBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ServizoService]
})
export class AppComponent {
  // title: propiedade que almacena un valor
  title = 'Servizo-Observables';
}
