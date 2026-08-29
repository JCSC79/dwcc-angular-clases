import { Component } from '@angular/core';
import { MensaxeriaService } from '../mensaxeria.service';

@Component({
  selector: 'app-emisor',
  standalone: true,
  imports: [],
  templateUrl: './emisor.component.html',
  styleUrl: './emisor.component.css'
})
export class EmisorComponent {
  
  // Incorporamos o servizo como propiedade privada a través do constructor para que sexa "SINGLETON" (iso significa que tanto o Emisor como o Receptor accederán ao mesmo obxecto servizo)
  constructor(private servizo: MensaxeriaService) {}

  cambiarTexto(): void {
    this.servizo.escribirMensaxe('Ola mundo!');
  }

}
