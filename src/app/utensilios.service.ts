import { Injectable } from '@angular/core';
import { Utensilio } from './utensilio';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtensiliosService {
  utensilios: Utensilio[] = []; // Array para almacenar os utensilios de cociña
  utensilios$: BehaviorSubject<Utensilio[]> = new BehaviorSubject<Utensilio[]>(this.utensilios);

  // Método para subscribirse aos cambios ocorridos no array de utensilios
  subscribirse(): Observable<Utensilio[]> {
    return this.utensilios$.asObservable();
  }

  // Método para engadir novos utensilios ao array
  engadir(utensilio: Utensilio): void {
    this.utensilios.push(utensilio); // Metemos o novo utensilio no array
    this.utensilios$.next(this.utensilios); // Informamos aos subscritores dos cambios no array
  }
}
