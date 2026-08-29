import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensaxeriaService } from '../mensaxeria.service';

@Component({
  selector: 'app-emisor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emisor.component.html',
  styleUrl: './emisor.component.css'
})
export class EmisorComponent {
  textoMensaxe: string = '';

  constructor(private servizo: MensaxeriaService) {}

  // Este método envía o texto escrito no formulario ao servizo para que sexa repartido a todos os subscritores
  enviar() {
    // Comprobamos que haxa algo escrito no texto da mensaxe a enviar
    if (this.textoMensaxe.trim()) {
      this.servizo.enviarMensaxe(this.textoMensaxe); // Enviamos aos subscritores a través do servizo
      this.textoMensaxe = ''; // Limpamos o campo de texto para os seguintes envíos
    }

  }
}
