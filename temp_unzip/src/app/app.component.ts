import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Factura } from './factura';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exercicio de Repaso de Formularios Reactivos';

  formularioFacturas: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioFacturas = fb.group({
      numero: ['', [Validators.required]],
      dataEmision: ['', [Validators.required]],
      razonSocial: ['', [Validators.required]],
      CIF: ['', [Validators.required]]
    });
  }

  crear(): void {
    let factura: Factura = this.formularioFacturas.value;
    console.table(factura);
    this.formularioFacturas.reset();
  }

  cancelar(): void {
    this.formularioFacturas.reset();
  }
}
