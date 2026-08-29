import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Definimos as rutas principais da aplicación
const rutas: Routes = [
  {
    path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(modulo => modulo.UsuariosModule) // Cando se acceda a '/usuarios' cargaremos o módulo de forma diferida/preguiceira (lazy loading)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)], // Improtamos RouterModule.forRoot() porque este é o módulo principal de rutas da aplicación
  exports: [RouterModule] // Exportamos RouterModule para que o módulo raíz poida usalo
})
export class AppRoutingModule { }
