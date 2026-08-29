import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoresService {
  cor: string = '';
  cor$: BehaviorSubject<string> = new BehaviorSubject(this.cor);

  cambiarCor(cor: string):void {
    this.cor = cor;
    this.cor$.next(this.cor);
  }

  subscribirse$(): Observable<string> {
    return this.cor$.asObservable();
  }
}
