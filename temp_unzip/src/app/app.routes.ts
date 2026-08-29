import { Routes } from '@angular/router';
import { PermitidoComponent } from './permitido/permitido.component';
import { RestrinxidoComponent } from './restrinxido/restrinxido.component';
import { controlAccesoGuard } from './control-acceso.guard';

export const routes: Routes = [
    { path: 'permitido', title: 'Permitido', component: PermitidoComponent, canActivate: [controlAccesoGuard] },
    { path: 'restrinxido', title: 'Restrinxido', component: RestrinxidoComponent },
    { path: '', redirectTo: 'restrinxido', pathMatch: 'full' }
];
