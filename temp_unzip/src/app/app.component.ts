import { Component } from '@angular/core';
import { Serie } from './serie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  textoBusca: string = "";
  title = 'Exercicio de Repaso de Filtrado';
  series: Serie[] = [
    { titulo: "Dragon Ball", primeiraEmision: new Date("1986-02-26"), xenero: "Anime", idioma: "Xaponés", enEmision: false },
    { titulo: "The Wire", primeiraEmision: new Date("2002-06-02"), xenero: "Drama-Crimen", idioma: "Inglés", enEmision: false },
    { titulo: "Hill Street Blues", primeiraEmision: new Date("1981-01-15"), xenero: "Policíaco", idioma: "Inglés", enEmision: false },
    { titulo: "Breaking Bad", primeiraEmision: new Date("2008-01-20"), xenero: "Drama-Crimen", idioma: "Inglés", enEmision: false },
    { titulo: "Better Call Saul", primeiraEmision: new Date("2015-02-08"), xenero: "Drama-Crimen", idioma: "Inglés", enEmision: false },
    { titulo: "The Sopranos", primeiraEmision: new Date("1999-01-10"), xenero: "Drama-Crimen", idioma: "Inglés", enEmision: false },
    { titulo: "Game of Thrones", primeiraEmision: new Date("2011-04-17"), xenero: "Drama fantástico", idioma: "Inglés", enEmision: false },
    { titulo: "House of the Dragon", primeiraEmision: new Date("2022-08-21"), xenero: "Drama fantástico", idioma: "Inglés", enEmision: true },
    { titulo: "The Simpsons", primeiraEmision: new Date("1989-12-17"), xenero: "Sitcom animada", idioma: "Inglés", enEmision: true },
    { titulo: "South Park", primeiraEmision: new Date("1997-08-13"), xenero: "Sitcom animada", idioma: "Inglés", enEmision: true },
    { titulo: "Seinfeld", primeiraEmision: new Date("1989-07-05"), xenero: "Sitcom", idioma: "Inglés", enEmision: false },
    { titulo: "Friends", primeiraEmision: new Date("1994-09-22"), xenero: "Sitcom", idioma: "Inglés", enEmision: false },
    { titulo: "The Office (US)", primeiraEmision: new Date("2005-03-24"), xenero: "Sitcom", idioma: "Inglés", enEmision: false },
    { titulo: "Parks and Recreation", primeiraEmision: new Date("2009-04-09"), xenero: "Sitcom", idioma: "Inglés", enEmision: false },
    { titulo: "Curb Your Enthusiasm", primeiraEmision: new Date("2000-10-15"), xenero: "Comedia", idioma: "Inglés", enEmision: false },
    { titulo: "The X-Files", primeiraEmision: new Date("1993-09-10"), xenero: "Ciencia ficción", idioma: "Inglés", enEmision: false },
    { titulo: "Twin Peaks", primeiraEmision: new Date("1990-04-08"), xenero: "Misterio", idioma: "Inglés", enEmision: false },
    { titulo: "Lost", primeiraEmision: new Date("2004-09-22"), xenero: "Misterio", idioma: "Inglés", enEmision: false },
    { titulo: "The Walking Dead", primeiraEmision: new Date("2010-10-31"), xenero: "Horror drama", idioma: "Inglés", enEmision: false },
    { titulo: "Stranger Things", primeiraEmision: new Date("2016-07-15"), xenero: "Ciencia ficción", idioma: "Inglés", enEmision: true },
    { titulo: "Doctor Who", primeiraEmision: new Date("1963-11-23"), xenero: "Ciencia ficción", idioma: "Inglés", enEmision: true },
    { titulo: "Sherlock", primeiraEmision: new Date("2010-07-25"), xenero: "Drama-Crimen", idioma: "Inglés", enEmision: false },
    { titulo: "Black Mirror", primeiraEmision: new Date("2011-12-04"), xenero: "Ciencia ficción", idioma: "Inglés", enEmision: true },
    { titulo: "The Crown", primeiraEmision: new Date("2016-11-04"), xenero: "Drama histórico", idioma: "Inglés", enEmision: false },
    { titulo: "Peaky Blinders", primeiraEmision: new Date("2013-09-12"), xenero: "Drama-Crimen", idioma: "Inglés", enEmision: false },
    { titulo: "Mad Men", primeiraEmision: new Date("2007-07-19"), xenero: "Drama", idioma: "Inglés", enEmision: false },
    { titulo: "The Leftovers", primeiraEmision: new Date("2014-06-29"), xenero: "Drama", idioma: "Inglés", enEmision: false },
    { titulo: "Succession", primeiraEmision: new Date("2018-06-03"), xenero: "Drama", idioma: "Inglés", enEmision: false },
    { titulo: "Fargo", primeiraEmision: new Date("2014-04-15"), xenero: "Drama-Crimen", idioma: "Inglés", enEmision: true },
    { titulo: "True Detective", primeiraEmision: new Date("2014-01-12"), xenero: "Drama-Crimen", idioma: "Inglés", enEmision: true },
    { titulo: "The Mandalorian", primeiraEmision: new Date("2019-11-12"), xenero: "Space western", idioma: "Inglés", enEmision: true },
    { titulo: "Andor", primeiraEmision: new Date("2022-09-21"), xenero: "Ciencia ficción", idioma: "Inglés", enEmision: true },
    { titulo: "Star Trek", primeiraEmision: new Date("1966-09-08"), xenero: "Ciencia ficción", idioma: "Inglés", enEmision: false },
    { titulo: "Star Trek: The Next Generation", primeiraEmision: new Date("1987-09-28"), xenero: "Ciencia ficción", idioma: "Inglés", enEmision: false },
    { titulo: "The Expanse", primeiraEmision: new Date("2015-12-14"), xenero: "Ciencia ficción", idioma: "Inglés", enEmision: false },
    { titulo: "Narcos", primeiraEmision: new Date("2015-08-28"), xenero: "Drama-Crimen", idioma: "Inglés", enEmision: false },
    { titulo: "Money Heist (La casa de papel)", primeiraEmision: new Date("2017-05-02"), xenero: "Thriller", idioma: "Español", enEmision: false },
    { titulo: "Dark", primeiraEmision: new Date("2017-12-01"), xenero: "Ciencia ficción", idioma: "Alemán", enEmision: false },
    { titulo: "Squid Game", primeiraEmision: new Date("2021-09-17"), xenero: "Thriller", idioma: "Coreano", enEmision: true },
    { titulo: "Attack on Titan", primeiraEmision: new Date("2013-04-07"), xenero: "Anime", idioma: "Xaponés", enEmision: false },
    { titulo: "Neon Genesis Evangelion", primeiraEmision: new Date("1995-10-04"), xenero: "Anime", idioma: "Xaponés", enEmision: false },
    { titulo: "Cowboy Bebop", primeiraEmision: new Date("1998-04-03"), xenero: "Anime", idioma: "Xaponés", enEmision: false },
    { titulo: "One Piece", primeiraEmision: new Date("1999-10-20"), xenero: "Anime", idioma: "Xaponés", enEmision: true },
    { titulo: "Naruto", primeiraEmision: new Date("2002-10-03"), xenero: "Anime", idioma: "Xaponés", enEmision: false },
    { titulo: "Death Note", primeiraEmision: new Date("2006-10-03"), xenero: "Anime", idioma: "Xaponés", enEmision: false },
    { titulo: "The Bear", primeiraEmision: new Date("2022-06-23"), xenero: "Comedia dramática", idioma: "Inglés", enEmision: true },
    { titulo: "The Last of Us", primeiraEmision: new Date("2023-01-15"), xenero: "Ciencia ficción", idioma: "Inglés", enEmision: true },
    { titulo: "Chernobyl", primeiraEmision: new Date("2019-05-06"), xenero: "Drama histórico", idioma: "Inglés", enEmision: false },
    { titulo: "Band of Brothers", primeiraEmision: new Date("2001-09-09"), xenero: "War drama", idioma: "Inglés", enEmision: false },
    { titulo: "The Boys", primeiraEmision: new Date("2019-07-26"), xenero: "Superhero", idioma: "Inglés", enEmision: true },
  ];
  seriesTemp: Serie[] = [...this.series]; // Este array será sobre o que traballemos ao facer os filtrados para non perder os datos orixinais

  // Este método execútase cada vez que cambia unha propiedade de clase, como "textoBusca" cambia cada vez que se escribe no input, entón este método válenos para facer o filtrado
  ngDoCheck(): void {
    if (this.textoBusca.trim() === "") {
      // Se o texto de busca está baleiro, recuperamos o array orixinal
      this.seriesTemp = [...this.series];
    } else {
      // Se o texto de busca non está baleiro, filtramos o array orixinal quedándonos con aquelas series cuxo título (en minúscula) conteña o texto de busca (en minúscula)
      this.seriesTemp = this.series.filter(serie => serie.titulo.toLowerCase().includes(this.textoBusca.toLowerCase()));
    }
  }
}
