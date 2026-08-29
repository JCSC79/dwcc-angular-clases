import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-probas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './probas.component.html',
  styleUrl: './probas.component.css'
})
export class ProbasComponent {

  // Engadimos unha propiedade privada de tipo "Router" para controlar a navegación ás rutas manualmente
  constructor(private router: Router) {}

  // Método que navega á compoñente Probas B pasando dous parámetros
  navegarB(numero1: number, numero2: number) {
    this.router.navigate(['/probas/probas-b',numero1,numero2]);
  }
}
