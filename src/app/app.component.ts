import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formularios Reactivos con Validación';
  formulario: FormGroup; // Definimos o FormGroup que irá asociado ao noso formulario HTML

  // Declaramos unha propiedade privada de tipo FormBuilder que nos permitirá crear de xeito simple o formulario reactivo
  constructor(private elaborador: FormBuilder) {
    this.formulario = this.elaborador.group({
      numParte: ['', [Validators.required]],
      matricula: ['', [Validators.required]],
      gravidade: ['', [Validators.required]],
      descricion: ['', [Validators.required, Validators.maxLength(300)]],
      data: [new Date().toISOString().split('T')[0], [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      numVitimas: [1, [Validators.required]]
    });
  }

  // Comportamento do botón REXISTRAR
  rexistrar(): void {
    // Comprobamos se o formulario é válido
    if (this.formulario.valid) {
      console.table(this.formulario.value); // Imprimimos por consola o obxecto que contén os datos do formulario reactivo
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  // Comportamento do botón CANCELAR
  cancelar(): void {
    this.formulario.reset(); // Limpamos todos os campos do formulario reactivo (e do obxecto asociado)
  }

  // GETTERS para os controis de formulario (para facilitar o traballo dende HTML)
  get campoNumParte() {
    return this.formulario.get('numParte');
  }

  get campoMatricula() {
    return this.formulario.get('matricula');
  }

  get campoGravidade() {
    return this.formulario.get('gravidade');
  }

  get campoDescricion() {
    return this.formulario.get('descricion');
  }

  get campoData() {
    return this.formulario.get('data');
  }

  get campoEmail() {
    return this.formulario.get('email');
  }

  get campoTelefono() {
    return this.formulario.get('telefono');
  }

  get campoNumVitimas() {
    return this.formulario.get('numVitimas');
  }

  // GETTERS PARA VER SE OS CAMPOS SON VÁLIDOS
  get numParteValido(): boolean {
    return this.campoNumParte.valid && this.campoNumParte.touched;
  }

  get matriculaValido(): boolean {
    return this.campoMatricula.valid && this.campoMatricula.touched;
  }

  get gravidadeValido(): boolean {
    return this.campoGravidade.valid && this.campoGravidade.touched;
  }

  get descricionValido(): boolean {
    return this.campoDescricion.valid && this.campoDescricion.touched;
  }

  get dataValido(): boolean {
    return this.campoData.valid && this.campoData.touched;
  }

  get emailValido(): boolean {
    return this.campoEmail.valid && this.campoEmail.touched;
  }

  get telefonoValido(): boolean {
    return this.campoTelefono.valid && this.campoTelefono.touched;
  }

  get numVitimasValido(): boolean {
    return this.campoNumVitimas.valid && this.campoNumVitimas.touched;
  }

  // GETTERS PARA VER SE OS CAMPOS SON INVÁLIDOS
  get numParteInvalido(): boolean {
    return this.campoNumParte.invalid && this.campoNumParte.touched;
  }

  get matriculaInvalido(): boolean {
    return this.campoMatricula.invalid && this.campoMatricula.touched;
  }

  get gravidadeInvalido(): boolean {
    return this.campoGravidade.invalid && this.campoGravidade.touched;
  }
  
  get descricionInvalido(): boolean {
    return this.campoDescricion.invalid && this.campoDescricion.touched;
  } 

  get dataInvalido(): boolean {
    return this.campoData.invalid && this.campoData.touched;
  } 

  get emailInvalido(): boolean {
    return this.campoEmail.invalid && this.campoEmail.touched;
  }

  get telefonoInvalido(): boolean {
    return this.campoTelefono.invalid && this.campoTelefono.touched;
  }

  get numVitimasInvalido(): boolean {
    return this.campoNumVitimas.invalid && this.campoNumVitimas.touched;
  }
}
