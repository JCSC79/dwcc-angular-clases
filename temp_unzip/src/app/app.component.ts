import { Component } from '@angular/core';
import { Pelicula } from './pelicula';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exercicio Películas e Rutas';
  peliculas: Pelicula[] = [
  { titulo: "O labirinto do fauno", ano: 2006, xenero: "fantasía / drama", diretor: "Guillermo del Toro" },
  { titulo: "Mar adentro", ano: 2004, xenero: "drama", diretor: "Alejandro Amenábar" },
  { titulo: "Todo sobre mi madre", ano: 1999, xenero: "drama", diretor: "Pedro Almodóvar" },
  { titulo: "Tesis", ano: 1996, xenero: "thriller", diretor: "Alejandro Amenábar" },
  { titulo: "La isla mínima", ano: 2014, xenero: "thriller / crime", diretor: "Alberto Rodríguez" },
  { titulo: "Celda 211", ano: 2009, xenero: "thriller / drama", diretor: "Daniel Monzón" },
  { titulo: "El secreto de sus ojos", ano: 2009, xenero: "thriller / drama", diretor: "Juan José Campanella" },
  { titulo: "Relatos salvajes", ano: 2014, xenero: "comedia negra / drama", diretor: "Damián Szifron" },
  { titulo: "Roma", ano: 2018, xenero: "drama", diretor: "Alfonso Cuarón" },
  { titulo: "Cidade de Deus", ano: 2002, xenero: "crime / drama", diretor: "Fernando Meirelles, Kátia Lund" }
];

}
