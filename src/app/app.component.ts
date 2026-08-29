import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HostListener para eventos de teclado e scroll';
  contaEnter: number = 0; // Contador de pulsacións da tecla ENTER
  contaShiftQ: number = 0; // Contador de pulsacións da combinación SHIFT + Q
  contaClick: number = 0; // Contador de clics do rato
  contaScroll: number = 0; // Contador de veces que se fai scroll
  contaShiftDto: number = 0; // Contador de veces que se preme Shift dereito
  contaClickDto: number = 0; // Contador de clics do botón dereito do rato

  // Método que se executa cando se preme a tecla ENTER
  @HostListener('window:keydown.enter') premerEnter() {
    this.contaEnter++;
  }

  // Método que se executa cando se preme a combinación Shift + Q
  @HostListener('window:keydown.shift.q') premerShiftQ() {
    this.contaShiftQ++;
  }

  // Método que se executa cando se fai click co rato
  @HostListener('window:click') facerClic() {
    this.contaClick++;
  }

  // Método que se executa cando se fai scroll vertical na páxina
  @HostListener('window:scroll') facerScroll() {
    this.contaScroll++;
  }

  // Método que se executa cada vez que se preme unha tecla e que conta o número de veces que esa tecla é o Shift dereito
  @HostListener('window:keydown', ['$event']) contarShiftDereito(evento: KeyboardEvent) {
    if (evento.code === 'ShiftRight') {
      this.contaShiftDto++;
    }
  }

  // Método que se executa cada vez que se fai clic co rato e que conta o número de veces que se fai clic co botón dereito
  @HostListener('window:mousedown', ['$event']) contarClicDereito(evento: MouseEvent) {
    if (evento.button == 2) {
      this.contaClickDto++;
    }
  }

  // Este método evita que se abra o menú contextual ao facer clic co botón dereito
  @HostListener('window:contextmenu', ['$event']) evitarMenuContextual(evento: MouseEvent) {
    evento.preventDefault();
  }
}
