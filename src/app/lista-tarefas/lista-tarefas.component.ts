// ✅ Importamos os módulos e servizos necesarios
import { Component, signal } from '@angular/core'; // 🔹 `Component` para definir a compoñente, `signal` non se usa aquí (podería eliminarse)
import { TarefasService } from '../tarefas.service'; // 🔹 Servizo que manexa a lóxica das tarefas
import { Tarefa } from '../models/tarefa'; // 🔹 Interface que define a estrutura dunha tarefa
import { CommonModule } from '@angular/common'; // 🔹 Importamos `CommonModule` para habilitar *ngFor e outras directivas
import { NovaTarefaComponent } from '../nova-tarefa/nova-tarefa.component'; // 🔹 Importamos a compoñente para engadir novas tarefas

/**
 * 🔹 Decorador `@Component` que define a compoñente Angular
 */
@Component({
  selector: 'app-lista-tarefas', // ✅ Nome do selector que usaremos no HTML
  standalone: true, // ✅ Indica que esta compoñente é standalone (non pertence a un módulo específico)
  imports: [CommonModule, NovaTarefaComponent], // ✅ Importamos `CommonModule` para *ngFor e a compoñente `NovaTarefaComponent`
  templateUrl: './lista-tarefas.component.html', // ✅ Definimos o ficheiro de template externo
  styleUrl: './lista-tarefas.component.css' // ✅ Ligamos os estilos específicos desta compoñente
})
export class ListaTarefasComponent {
  /**
   * 🔹 Array que almacena a lista de tarefas.
   * 🔹 Inicialízase baleiro e logo actualízase ao obter as tarefas do servizo.
   */
  tarefas: Tarefa[] = [];

  /**
   * ✅ Constructor onde inxectamos `TarefasService` para manexar as tarefas.
   * ✅ Cargamos as tarefas iniciais desde o servizo.
   */
  constructor(private tarefasService: TarefasService) {
    this.tarefas = this.tarefasService.obterTarefas(); // 🔹 Obtemos a lista de tarefas do servizo ao iniciar a compoñente
  }

  /**
   * ✅ Método que marca unha tarefa como completada.
   * 🔹 Chama ao servizo para actualizar o estado da tarefa.
   * 🔹 Reasigna `tarefas` con `obterTarefas()` para forzar a actualización da UI.
   * 🔹 Facemos isto porque Angular só detecta cambios en arrays se cambiamos a referencia.
   */
  completarTarefa(id: number): void {
    this.tarefasService.completarTarefa(id); // 🔹 Modificamos o estado da tarefa chamando ao servizo
    this.tarefas = [...this.tarefasService.obterTarefas()]; // 🔹 Creamos unha nova referencia ao array para que Angular detecte o cambio
  }

  /**
   * ✅ Método que engade unha nova tarefa á lista.
   * 🔹 Crea unha nova tarefa con `id` único baseado en `Date.now()`.
   * 🔹 Usa o servizo `TarefasService` para engadila á lista.
   * 🔹 Actualiza a propiedade `tarefas` con `obterTarefas()` para refrescar a lista na interface.
   */
  engadirTarefa(titulo: string): void {
    const novaTarefa: Tarefa = { id: Date.now(), titulo, completada: false }; // 🔹 Creamos unha nova tarefa con título e estado inicial "pendente"
    this.tarefasService.engadirTarefa(novaTarefa); // 🔹 Chamamos ao servizo para engadila á lista
    this.tarefas = this.tarefasService.obterTarefas(); // 🔹 Actualizamos a lista de tarefas para que se reflicta na UI
  }
}
