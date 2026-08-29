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
  title = 'Exercicio de Táboas de Datos dende JSON';
  cohetes: any[] = [];

  constructor(private cliente: HttpClient) {}

  ngOnInit(): void {
    this.cliente.get('cohetes.json').subscribe((datos) => {
      this.cohetes = datos as any[];
    });
  }
}
