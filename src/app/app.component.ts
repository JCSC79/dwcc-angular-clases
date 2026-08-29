import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formularios-reactivos';
  formularioAccidente: FormGroup; // Definimos o FormGroup que irá asociado ao noso formulario HTML

  // Declaramos unha propiedade de tipo FormBuilder (que nos permitirá crear de xeito simple o formulario reactivo)
  constructor(private elaborador: FormBuilder) {
    this.formularioAccidente = this.elaborador.group({
      numParte: new FormControl(),
      matricula: new FormControl(),
      gravidade: new FormControl(),
      descricion: new FormControl(),
      data: new FormControl(),
      email: new FormControl(),
      telefono: new FormControl(),
      numVitimas: new FormControl()
    });

    // Definimos o comportamento do noso formulario cada vez que sufra un cambio
    this.formularioAccidente.valueChanges
      .pipe(debounceTime(500))
      .subscribe(valor => {
        console.table(valor);
      });
  }

  rexistrar(evento: Event) {
    evento.preventDefault(); // Evitamos o comportamento por defecto do navegador que borraría o formulario ao lanzar un "submit"
    console.table(this.formularioAccidente.value);
  }
}
