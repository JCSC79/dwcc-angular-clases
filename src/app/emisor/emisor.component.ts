import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CoresService } from '../cores.service';

@Component({
  selector: 'app-emisor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './emisor.component.html',
  styleUrl: './emisor.component.css'
})
export class EmisorComponent {
  formulario: FormGroup;

  constructor(private elaborador: FormBuilder, private servizoCores: CoresService) {
    this.formulario = this.elaborador.group({
      cor: []      
    });
  }

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe(valor => {
      this.servizoCores.cambiarCor(valor.cor);
    });
  }

}
