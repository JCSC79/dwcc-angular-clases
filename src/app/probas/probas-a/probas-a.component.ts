import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-probas-a',
  standalone: true,
  imports: [],
  templateUrl: './probas-a.component.html',
  styleUrl: './probas-a.component.css'
})
export class ProbasAComponent {
  // Usaremos esta propiedade para recibir o parámetro pasado a través da ruta
  cousa: string = '';

  // Creamos unha propiedade privada de tipo ActivatedRouter para acceder aos parámetros
  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {
    // Accedemos á propiedade 'params' da ruta activada (que é un Observable de parámetros). Vainos permitir subscribirnos aos cambios que se produzan nos parámetros recibidos
    this.ruta.params.subscribe(parametros => {
      this.cousa = parametros['cousa']; // Tomamos a propiedade 'cousa' do obxecto 'parámetros' (que contén todos os parámetros recibidos pola ruta)
    })
  }
}
