import { TarefasService } from './tarefas.service';
import { Tarefa } from './models/tarefa';

describe('TarefasService', () => {
  let service: TarefasService; // Variable para almacenar a instancia do servizo

  // ✅ Antes de cada proba, creamos unha nova instancia do servizo
  beforeEach(() => {
    service = new TarefasService();
  });

  // ✅ Proba 1: Verificar que o servizo se instancia correctamente
  it('debería instanciarse correctamente', () => {
    expect(service).toBeTruthy();
  });

  // ✅ Proba 2: Comprobar que ao inicio hai 3 tarefas
  it('debería ter tres tarefas ao iniciar', () => {
    const tarefas: Tarefa[] = service.obterTarefas(); // Obtemos as tarefas iniciais
    expect(tarefas.length).toBe(3); // Comprobamos que hai 3 tarefas
  });

  // ✅ Proba 3: Marcar unha tarefa como completada
  it('debería marcar unha tarefa como completada', () => {
    service.completarTarefa(1); // Marcamos a tarefa con ID 1 como completada
    const tarefa = service.obterTarefas().find(t => t.id === 1); // Buscamos a tarefa
    expect(tarefa?.completada).toBeTrue(); // Comprobamos que está completada
  });
});
