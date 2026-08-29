import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Importamos FormsModule para que [(ngModel)] funcione ben
  templateUrl: './nova-tarefa.component.html',
  styleUrl: './nova-tarefa.component.css'
})
export class NovaTarefaComponent {
  @Output() tarefaEngadida = new EventEmitter<string>();
  titulo: string = '';

  engadirTarefa(): void {
    if (this.titulo.trim()) {
      this.tarefaEngadida.emit(this.titulo);
      this.titulo = ''; // ✅ Limpamos a variable

      // 🔹 FORZAMOS A ACTUALIZACIÓN DO INPUT NO PRÓXIMO CICLO DE DETECCIÓN DE CAMBIOS
      setTimeout(() => {}, 0);
    }
  }
}
