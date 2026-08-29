import { CanActivateFn } from '@angular/router';

export const controlAccesoGuard: CanActivateFn = (route, state) => {
  let acceso : string | null = localStorage.getItem('acceso');

  if (acceso == 'true') {
    return true;
  } else {
    return false;
  }
};