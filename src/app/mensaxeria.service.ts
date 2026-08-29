import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensaxeriaService {
  private ultimaMensaxe = new BehaviorSubject<string>('Benvid@ ao chat!'); // Este observable garda únicamente a última mensaxe enviada
  ultimaMensaxe$ = this.ultimaMensaxe.asObservable();

  private historialMensaxes = new ReplaySubject<string>(5); // Este observable garda as últimas 5 mensaxes recibidas
  historialMensaxes$ = this.historialMensaxes.asObservable();

  private contador = signal(1); // Contador de mensaxes (servirá para representar os novos envíos)

  enviarMensaxe(texto: string) {
    let mensaxe = this.contador +': '+ texto;
    this.contador.update(n => n+1); // Incrementamos o contador
    this.ultimaMensaxe.next(mensaxe); // Informamos aos subscritores do BehaviorSubject (actualizar última mensaxe)
    this.historialMensaxes.next(mensaxe); // Informamos aos subscritores do ReplaySubject (gardar no historial)
  }
}
