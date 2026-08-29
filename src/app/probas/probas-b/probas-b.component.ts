import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-probas-b',
  standalone: true,
  imports: [],
  templateUrl: './probas-b.component.html',
  styleUrl: './probas-b.component.css'
})
export class ProbasBComponent {
  // Propiedades que recibirán os parámetros pasados pola ruta
  numero1: number = 0;
  numero2: number = 0;

  // Creamos unha propiedade privada de tipo ActivatedRouter para acceder aos parámetros
  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {
    // Accedemos á propiedade 'params' da ruta activada (que é un Observable de parámetros). Vainos permitir subscribirnos aos cambios que se produzan nos parámetros recibidos
    this.ruta.params.subscribe(parametros => {
      this.numero1 = parseFloat(parametros['numero1']);
      this.numero2 = parseFloat(parametros['numero2']);
    })
  }
}
