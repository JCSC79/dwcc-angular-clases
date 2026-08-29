import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';



@NgModule({
  // Aquí indicamos todas as compoñentes que forman parte do módulo
  declarations: [
    ListaUsuariosComponent
  ],
  // O que se importe aquí poderá ser usado por calquera elemento do módulo
  imports: [
    CommonModule
  ],
  // Aquí exportamos aquelas compoñentes que queremos que poidan ser usadas dende fora do módulo
  exports: [
    ListaUsuariosComponent
  ]
})
export class UsuariosModule { }
