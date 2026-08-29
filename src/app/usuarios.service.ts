import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiURL: string = 'https://698210a3c9a606f5d448ea16.mockapi.io/usuarios';

  // Engadimos un cliente HTTP para poder facer solicitudes API REST a servidor
  constructor(private cliente: HttpClient) { }

  // Solicita ao servidor toda a lista de usuarios en formato array
  obterUsuarios(): Observable<Usuario[]> {
    return this.cliente.get<Usuario[]>(this.apiURL);
  }

  // Engade un novo usuario ao servidor pasándolle o nome e o rol
  engadirUsuario(nome: string, rol: string): Observable<Usuario> {
    return this.cliente.post<Usuario>(this.apiURL, {nome, rol});
  }

  // Modifica o rol do usuario indicado no servidor
  modificarRol(usuario: Usuario): Observable<Usuario> {
    let novoRol: string = (usuario.rol === 'administrador' ? 'estándar' : 'administrador');

    return this.cliente.put<Usuario>(this.apiURL+'/'+usuario.id, { rol: novoRol });
  }

  // Elimina do servidor o usuario cuxo id coincide co parámetro
  eliminarUsuario(id: string): Observable<void> {
    return this.cliente.delete<void>(this.apiURL+'/'+id);
  }
}
