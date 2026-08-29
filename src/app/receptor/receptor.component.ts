import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MensaxeriaService } from '../mensaxeria.service';

@Component({
  selector: 'app-receptor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receptor.component.html',
  styleUrl: './receptor.component.css'
})
export class ReceptorComponent implements OnInit {
  ultimaMensaxe: string;
  historial: string[] = [];

  constructor(private servizo: MensaxeriaService) { }

  ngOnInit(): void {
    // Subscribimos a compoñente receptor ao BehaviorSubject do servizo
    this.servizo.ultimaMensaxe$.subscribe(mensaxe => {
      this.ultimaMensaxe = mensaxe;
    });

    // Subscribimos a compoñente receptor ao ReplaySubject do servizo
    this.servizo.historialMensaxes$.subscribe(mensaxe => {
      this.historial.push(mensaxe);
    });
  }
}
