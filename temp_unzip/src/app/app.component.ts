import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CrearCalefactorComponent } from './crear-calefactor/crear-calefactor.component';
import { Calefactor } from './calefactor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CrearCalefactorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Xanelas Modais';
  // Array de calefactores
  calefactores: Calefactor[] = [];
  // Propiedade que determinará se está cargado ou non o formulario de creación de calefactores
  amosarCrearCalefactores: boolean = false;
}
