import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-probas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './probas.component.html',
  styleUrl: './probas.component.css'
})
export class ProbasComponent {
  @Input() texto: string = "";
  eventos: string[] = [];

  // constructor: é o primeiro método que se executa no ciclo de vida da compoñente, encárgase de crear o obxecto
  constructor() {
    this.engadirEvento("Constructor: A compoñente foi creada.");
  }

  // Este método engade un evento ao array e imprímeo por consola
  engadirEvento(evento: string): void {
    console.log(evento);
    this.eventos.push(evento);
  }

  // ngOnInit: este método execútase cando a compoñente está completamente construída e lista para ser cargada na vista
  ngOnInit(): void {
    this.engadirEvento("ngOnInit: A compoñente foi inicializada.");
  }

  // ngOnChanges: este método execútase cada vez que se produce un cambio nos inputs da compoñente
  ngOnChanges(): void {
    this.engadirEvento("ngOnChanges: O valor do input cambiou.");
  }

  // ngOnDestroy: este método execútase xusto antes de destruír a compoñente
  ngOnDestroy(): void {
    this.engadirEvento("ngOnDestroy: A compoñente vai ser destruída.");
  }

  // ngDoCheck: este método execútase cada vez que se produce un cambio nas propiedades da compoñente (o seu estado)
  ngDoCheck(): void {
    this.engadirEvento("ngDoCheck: O sistema de detección de cambios foi executado.");
  }

  // ngAfterViewInit: este método execútase despois de que a compoñente sexa cargada na vista
  ngAfterViewInit(): void {
    this.engadirEvento("ngAfterViewInit: A vista da compoñente foi inicializada.");
  }
}