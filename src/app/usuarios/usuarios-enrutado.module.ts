import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

// Definimos as rutas específicas para os elementos contidos no módulo de usuarios
const rutas: Routes = [
  { path: '', component: ListaUsuariosComponent } // Se o usuario accede a '/usuarios' vaise cargar a compoñente 'ListaUsuarios' (adcemais é a ruta por defecto do módulo)
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas) // Importamos RouterModule con forChild() porque este é un módulo secundario
  ],
  exports: [
    RouterModule // Exportamos RouterModule para que outros elementos do módulo poidan usalo (chegado o caso)
  ]
})
export class UsuariosEnrutadoModule { }
