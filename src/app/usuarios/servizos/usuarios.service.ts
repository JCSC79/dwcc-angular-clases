import { Injectable } from '@angular/core';
import { Usuario } from '../../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios : Usuario[];

  constructor() {
    this.usuarios = [
      { id: 1, nome: 'Pepiño', email: 'pepinho@gmail.com' },
      { id: 2, nome: 'Xoana', email: 'xoana@gmail.com' },
      { id: 3, nome: 'Brais', email: 'brais@gmail.com' }
    ]
  }

  verUsuarios(): Usuario[] {
    return this.usuarios;
  }
}
