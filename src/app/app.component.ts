import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ficheiro JSON';

  // Array que recibirá os datos dende o ficheiro JSON
  empregados: any[] = [];

  // Engadimos unha propiedade de clase privada de tipo HttpClient
  constructor(private clienteHTTP: HttpClient) {}

  // Este método execútase cando a compoñente teña sido inicializada
  ngOnInit(): void {
    // Tomamos os datos do ficheiro JSON mediante unha solicitude HTTP e gardámolos no array 'empregados'
    this.clienteHTTP
      .get<any[]>('data/empregados.json')
      .subscribe((datos) => {
        this.empregados = datos;
      })
  }
}
