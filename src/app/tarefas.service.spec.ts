// ✅ Importamos as ferramentas necesarias para os tests
import { TestBed } from '@angular/core/testing'; // 🔹 `TestBed` permite configurar e inxectar dependencias en probas
import { provideHttpClient } from '@angular/common/http'; // 🔹 Proveedor para `HttpClient`
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing'; // 🔹 Ferramentas para testear `HttpClient`
import { TarefasService } from './tarefas.service'; // 🔹 O servizo a probar
import { Tarefa } from './tarefa'; // 🔹 Importamos a interface que define a estrutura dunha tarefa

// ✅ Definimos o conxunto de tests para `TarefasService`
describe('TarefasService', () => {
  let service: TarefasService; // 🔹 Instancia do servizo que imos testear
  let httpMock: HttpTestingController; // 🔹 Ferramenta para interceptar as chamadas HTTP dentro dos tests

  // ✅ Antes de cada test, configuramos `TestBed`
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TarefasService, // ✅ Rexistramos `TarefasService` para que poida ser inxectado
        provideHttpClient(), // ✅ Engadimos `HttpClient` para que estea dispoñible
        provideHttpClientTesting() // ✅ Activamos `HttpTestingController` para testear chamadas HTTP
      ]
    });

    service = TestBed.inject(TarefasService); // ✅ Obtemos unha instancia do servizo
    httpMock = TestBed.inject(HttpTestingController); // ✅ Obtemos `HttpTestingController` para interceptar chamadas HTTP
  });

  // ✅ Proba 1: Comprobar que `obterTarefas()` fai unha chamada GET correcta
  it('debería obter a lista de tarefas', () => {
    const tarefasMock: Tarefa[] = [
      { id: 1, titulo: 'Tarefa 1', completada: false },
      { id: 2, titulo: 'Tarefa 2', completada: true }
    ];

    // 🔹 Chamamos ao método `obterTarefas()`
    service.obterTarefas().subscribe((tarefas) => {
      expect(tarefas.length).toBe(2); // ✅ A resposta debe conter dúas tarefas
      expect(tarefas).toEqual(tarefasMock); // ✅ Comprobamos que os datos son os esperados
    });

    // 🔹 Simulamos a resposta HTTP
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/todos'); // ✅ Esperamos unha chamada a esta URL
    expect(req.request.method).toBe('GET'); // ✅ Verificamos que a petición é de tipo GET
    req.flush(tarefasMock); // ✅ Enviamos os datos simulados como resposta
  });

  // ✅ Proba 2: Comprobar que `engadirTarefa()` fai unha chamada POST correcta
  it('debería engadir unha nova tarefa', () => {
    const novaTarefa: Tarefa = { id: 3, titulo: 'Nova Tarefa', completada: false };

    // 🔹 Chamamos ao método `engadirTarefa()`
    service.engadirTarefa(novaTarefa).subscribe((tarefa) => {
      expect(tarefa).toEqual(novaTarefa); // ✅ Comprobamos que a resposta é a tarefa enviada
    });

    // 🔹 Simulamos a resposta HTTP
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/todos'); // ✅ Esperamos unha chamada a esta URL
    expect(req.request.method).toBe('POST'); // ✅ A chamada debe ser un POST
    expect(req.request.body).toEqual(novaTarefa); // ✅ O corpo da petición debe conter a nova tarefa
    req.flush(novaTarefa); // ✅ Enviamos a resposta simulada
  });

  // ✅ Proba final: Asegurarnos de que non hai chamadas pendentes
  afterEach(() => {
    httpMock.verify(); // 🔹 Verifica que non quedan solicitudes sen responder
  });
});
