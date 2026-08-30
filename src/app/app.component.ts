import { style } from '@angular/animations';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

/**
 * Componente que demuestra Componente de Angular
 * 
 * Demuestra conceptos de Angular
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title: propiedade que almacena un valor
  title = 'HostListener';

  // Tomamos a referencia do elemento 'caixa' de HTML
  @ViewChild('caixa') caixa: ElementRef;

  // Ao pasar o rato por riba do elemento poñemos unha cor de fondo azul
  @HostListener('mouseenter') aoPasarRato(): void {
    this.caixa.nativeElement.style.backgroundColor = 'blue';
  }

  // Ao sacar o rato de enriba do elemento poñemos unha cor de fondo vermella
  @HostListener('mouseleave') aoSacarRato(): void {
    this.caixa.nativeElement.style.backgroundColor = 'red';
  }
}
