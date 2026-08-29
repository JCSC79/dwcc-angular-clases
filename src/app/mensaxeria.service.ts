import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensaxeriaService {
  mensaxe: string = ''; // Esta é a propiedade que se vai compartir vía Observable
  mensaxe$: BehaviorSubject<string> = new BehaviorSubject(this.mensaxe); // Esta propiedade vainos permitir observar os cambios que ocorran sobre 'mensaxe'

  constructor() { }

  // Este método vaino usar o Emisor cada vez que queira actualizar a mensaxe
  escribirMensaxe(texto: string): void {
    this.mensaxe = texto;
    this.mensaxe$.next(this.mensaxe); // Informamos a todos os subscritores de que houbo cambios en 'mensaxe'
  }

  // Método que vai permitir ao Receptor subscribirse aos cambios que ocorran sobre 'mensaxe'
  subscribirse(): Observable<string> {
    return this.mensaxe$.asObservable();
  }
}
