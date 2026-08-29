import { Component } from '@angular/core';
import { ContidoComponent } from './contido/contido.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContidoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'input-output';
  compartida: number = 0;

  incrementar() {
    this.compartida = this.compartida+1;
  }

  recibirDatos(numero: number): void {
    this.compartida = numero;
  }
}
