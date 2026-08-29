import { Component } from '@angular/core';
import { AccesoServidorService } from './acceso-servidor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cliente HTTP';
  datosRecibidos: any[] = []; // Este array recibirá os datos obtidos do servidor

  constructor(private servizo: AccesoServidorService) {}

  ngOnInit(): void {
    // Gardamos nunha variable temporal o resultado de solicitar ao servizo que consulte a URL pasada
    let resultado = this.servizo.obterDatos('https://698210a3c9a606f5d448ea16.mockapi.io/peliculas');

    // Accedemos ao Observable de resultados mediante unha subscrición para ver os datos que hai dentro
    resultado.subscribe(datos => {
      this.datosRecibidos = datos as any[];
    })
  }
}
