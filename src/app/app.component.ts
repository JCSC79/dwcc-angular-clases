import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponhenteAComponent } from './componhente-a/componhente-a.component';
import { ComponhenteBComponent } from './componhente-b/componhente-b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngComponentOutlet';
  componhenteA = ComponhenteAComponent; // Esta propiedade almacena unha referencia á clase ComponhenteAComponent
  componhenteB = ComponhenteBComponent; // Esta propiedade almacena unha referencia á clase ComponhenteBComponent
  componhenteActiva = this.componhenteA; // Esta propiedade determina cal compoñente se amosará en cada instante
}
