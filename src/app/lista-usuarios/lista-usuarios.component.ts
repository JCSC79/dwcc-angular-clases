import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {
  usuarios: Usuario[] = [];
  formulario: FormGroup;

  constructor(private servizo: UsuariosService, private elaborador: FormBuilder) {
    // Construímos a estrutura do formulario reactivo usando o FormBuilder
    this.formulario = elaborador.group({
      nome: [],
      rol: []
    });
  }

  ngOnInit(): void {
    // Solicitamos ao servizo os datos de todos os usuarios
    this.servizo.obterUsuarios().subscribe({
      next: (datos) => this.usuarios = datos, // Se non hai erros, gardamos os datos no array de usuarios
      error: (erro) => console.error(erro) // Se hai erros, amosámolos pola consola de erro
    });
  }

  // Este método permite engadir un novo obxecto 'Usuario' ao servidor tomando os datos do formulario
  engadirUsuario(): void {
    this.servizo.engadirUsuario(this.formulario.value.nome, this.formulario.value.rol).subscribe({
      next: (usuario) => { // Se todo vai ben metemos o obxecto no array e limpamos o formulario
        this.usuarios.push(usuario);
        this.formulario.reset();
      },
      error: (erro) => console.error(erro) // Se ocorreu un erro amosámolo pola consola de erro
    })
  }

  // Este método cambia o rol dun usuario de 'administrador' a 'estándar' e viceversa, no servidor
  mudarRol(usuario: Usuario): void {
    this.servizo.modificarRol(usuario).subscribe({
      next: (actualizado) => { // Se non hai erros, actualizamos o rol do usuario cos datos recibidos do servidor
        usuario.rol = actualizado.rol;
      },
      error: (erro) => console.error(erro) // Se ocorreu un erro amosámolo pola consola de erro
    });
  }

  // Elimina o usuario indicado do servidor
  eliminar(usuario: Usuario): void {
    this.servizo.eliminarUsuario(usuario.id).subscribe({
      next: () => { // Se non hai erros actualizamos o array eliminando o usuario correspondente
        this.usuarios = this.usuarios.filter(usuarioActual => usuarioActual.id !== usuario.id);
      },
      error: (erro) => console.error(erro) // Se ocorreu un erro amosámolo pola consola de erro
    });
  }
}
