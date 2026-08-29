import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOption } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from '@angular/material/form-field';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-autocompletar',
  standalone: true,
  imports: [MatOption, FormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './autocompletar.component.html',
  styleUrl: './autocompletar.component.css'
})
export class AutocompletarComponent {
  semana = new FormControl();
  diasSemana: string[] = ['Luns','Martes','Mércores','Xoves','Venres','Sábado','Domingo'];
  opcionsFiltradas: Observable<string[]>;

  ngOnInit(): void {
    this.opcionsFiltradas = this.semana.valueChanges.pipe(
      startWith(''),
      map(valor => this.filtrar(valor || '')),
    );
  }

  filtrar(valor: string): string[] {
    let valorFiltrado = valor.toLowerCase();

    return this.diasSemana.filter(opcion => opcion.toLowerCase().includes(valorFiltrado));
  }
}
