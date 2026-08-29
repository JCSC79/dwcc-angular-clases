import { Component } from '@angular/core';
import { ProbasComponent } from './probas/probas.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProbasComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ciclo de Vida das Compoñentes';
  amosar: boolean = true;
  texto: string = "";

  cambiarTexto(): void {
    this.texto = "Ola mundo!";
  }

  eliminarComponhente(): void {
    this.amosar = false;
  }
}
