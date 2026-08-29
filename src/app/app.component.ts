import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmisorComponent } from './emisor/emisor.component';
import { ReceptorComponent } from './receptor/receptor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EmisorComponent, ReceptorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servizo-mensaxeria';
  receptores: number[] = []; // Lista de receptores activos

  // Este método engade un novo receptor ao final do array
  engadirReceptor() {
    this.receptores.push(this.receptores.length-1);
  }
}
