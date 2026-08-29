// ✅ Importamos os módulos necesarios
import { Injectable, signal } from '@angular/core'; // 🔹 `Injectable` permite que Angular xestione este servizo. `signal` úsase para a reactividade.
import { Tarefa } from './models/tarefa'; // 🔹 Importamos a interface `Tarefa` para definir a estrutura dos datos almacenados no servizo.

/**
 * ✅ O decorador `@Injectable` indica que este é un servizo de Angular.
 * ✅ `{ providedIn: 'root' }` fai que o servizo estea dispoñible en toda a aplicación sen necesidade de importalo nun módulo.
 */
@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  /**
   * ✅ `tarefas`: Signal que almacena a lista de tarefas.
   * 🔹 `signal<Tarefa[]>` crea un estado reactivo, o que significa que os compoñentes que usen este servizo poderán reaccionar automaticamente aos cambios.
   * 🔹 Contén unha lista inicial con tres tarefas de exemplo.
   */
  tarefas = signal<Tarefa[]>([
    { id: 1, titulo: 'Aprender probas unitarias', completada: false },
    { id: 2, titulo: 'Configurar Karma en Angular', completada: false },
    { id: 3, titulo: 'Practicar con Jasmine', completada: false }
  ]);

  /**
   * ✅ Método para obter todas as tarefas.
   * 🔹 `this.tarefas()` devolve o valor almacenado no signal `tarefas`.
   * 🔹 Como `tarefas` é un signal, calquera compoñente que use este método pode reaccionar automaticamente se o estado cambia.
   */
  obterTarefas(): Tarefa[] {
    return this.tarefas();
  }

  /**
   * ✅ Método para marcar unha tarefa como completada.
   * 🔹 Recibe un `id` como parámetro e actualiza a tarefa correspondente.
   * 🔹 Usa `this.tarefas.update()`, que permite modificar o estado dun signal de forma inmutable.
   * 🔹 `map()` percorre todas as tarefas e, se a `id` coincide, crea unha nova copia da tarefa con `completada: true`.
   * 🔹 Isto asegura que a actualización do estado se fai de maneira reactiva e eficiente.
   */
  completarTarefa(id: number): void {
    this.tarefas.update(tarefas =>
      tarefas.map(t => (t.id === id ? { ...t, completada: true } : t)) // 🔹 Creamos un novo array con todas as tarefas, modificando só a tarefa correspondente.
    );
  
    console.log('Tarefa completada:', this.tarefas()); // 🔹 Mensaxe de depuración para verificar os cambios no estado.
  }  

  /**
   * ✅ Método para engadir unha nova tarefa á lista.
   * 🔹 Recibe un obxecto `Tarefa` como parámetro.
   * 🔹 Usa `this.tarefas.update()` para modificar o estado do signal.
   * 🔹 `[...]` crea unha nova referencia ao array, engadindo a nova tarefa ao final.
   * 🔹 Isto fai que a UI que use este servizo se actualice automaticamente.
   */
  engadirTarefa(novaTarefa: Tarefa): void {
    this.tarefas.update((tarefas) => [...tarefas, novaTarefa]); // 🔹 Engadimos a nova tarefa mantendo a inmutabilidade.
  }
}
