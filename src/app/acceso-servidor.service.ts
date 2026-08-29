import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoServidorService {

  // Incorporamos unha propiedade privada de tipo HttpClient para poder facer solicitudes API REST
  constructor(private cliente: HttpClient) {}

  // Este método vai ser o que permita facer solicitudes GET HTTP indicando unha URL
  obterDatos(url: string): Observable<Object> {
    return this.cliente.get(url); // Devolvemos o resultado de lanzar unha petición GET API REST contra a URL indicada
  }
}
