import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent implements OnInit {
  semana = new FormControl('');
  diasSemana: string[] = ['Luns','Martes','Mércores','Xoves','Venres','Sábado','Domingo'];
  opcionsFiltradas: Observable<string[]>;

  ngOnInit() {
    this.opcionsFiltradas = this.semana.valueChanges.pipe(
      startWith(''),
      map(valor => this.filtrar(valor || '')),
    );
  }

  filtrar(valor: string): string[] {
    let valorFiltrado = valor.toLocaleLowerCase();

    return this.diasSemana.filter(opcion => opcion.toLocaleLowerCase().includes(valorFiltrado));
  }

}
