import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root' // ✅ O servizo estará dispoñible en toda a aplicación
})
export class TarefasService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // ✅ API ficticia para as tarefas

  constructor(private http: HttpClient) {} // ✅ Inxectamos `HttpClient` para facer chamadas HTTP

  /**
   * ✅ Método para obter todas as tarefas desde a API.
   * 🔹 Retorna un `Observable<Tarefa[]>`, permitindo a suscrición nos compoñentes.
   */
  obterTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  /**
   * ✅ Método para engadir unha nova tarefa á API.
   * 🔹 Envia unha petición POST co obxecto `Tarefa`.
   */
  engadirTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }
}
