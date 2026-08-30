import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * Componente que demuestra Componente de Angular
 * 
 * Demuestra conceptos de Angular
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title: propiedade que almacena un valor
  title = 'ng-template';

  // Exemplo 1: usando ng-template con ngIf
  logueado: boolean = false;
  // usuaria: propiedade que almacena un valor
  usuaria: string = "Uxía";

  // Exemplo 2: vistas personalizadas usando ng-template con *ngTemplateOutlet
  produtos: any[] = [
    { modelo: 'Carcasa 3 1/2 USB3', prezo: 19.95 },
    { modelo: 'Carcasa 2 1/2 SATA', prezo: 5.95 },
    { modelo: 'Carcasa 3 1/2 USB-C', prezo: 23.95 }
  ];
}