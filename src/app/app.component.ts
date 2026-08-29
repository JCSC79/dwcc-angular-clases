import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario-ficheiro';

  formulario: FormGroup;
  datos: File | null = null;

  constructor(private elaborador: FormBuilder) {
    this.formulario = elaborador.group({
      ficheiro: [null]
    })
  }

  cambioFicheiro(evento: Event): void {
    let entrada = evento.target as HTMLInputElement;

    // Se foi escollido algún ficheiro
    if (entrada.files && entrada.files.length > 0) {
      this.datos = entrada.files[0]; // Gardamos en "datos" o ficheiro escollido
      try {
        this.formulario.patchValue({ ficheiro: this.datos }); // Cargamos no formulario os datos do ficheiro escollido
      } catch(erro) {}
    }
  }

  enviar(): void {
    if (this.datos) {
      console.log(this.datos);
    }
  }
}
