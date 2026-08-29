import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Tarefa } from './tarefa';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('entradaSaida', [
      transition(':enter', [
        animate('500ms ease-out', keyframes([
          style({
            transform: 'scale(0.5)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'scale(1.1)',
            opacity: 0.7,
            offset: 0.7
          }),
          style({
            transform: 'scale(1)',
            opacity: 1,
            offset: 1
          }),
        ]))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({
          transform: 'translateX(100%)',
          opacity: 0
        }))
      ])
    ]),
    trigger('realzada', [
      state('pendente', style({
        backgroundColor: 'white',
        transform: 'scale(1)'
      })),
      state('completada', style({
        backgroundColor: 'green',
        transform: 'scale(1.05)'
      })),
      transition('pendente <=> completada', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Listaxe Animada';
  formulario!: FormGroup;
  tarefas: Tarefa[] = [];

  constructor(private elaborador: FormBuilder) {
    this.formulario = elaborador.group({
      texto: []
    });
  }

  engadir(): void {
    if (this.formulario.get('texto')?.value) {
      this.tarefas.push({
        id: Date.now(),
        texto: this.formulario.get('texto')?.value,
        completada: false
      });
      this.formulario.reset();
    }
  }

  completar(tarefa: Tarefa): void {
    tarefa.completada = true;
  }

  eliminar(tarefa: Tarefa): void {
    this.tarefas = this.tarefas.filter(dato => dato.id !== tarefa.id);
  }
}
