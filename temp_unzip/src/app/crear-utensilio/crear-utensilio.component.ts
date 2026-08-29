import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Utensilio } from '../utensilio';
import { UtensiliosService } from '../utensilios.service';

@Component({
  selector: 'app-crear-utensilio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-utensilio.component.html',
  styleUrl: './crear-utensilio.component.css'
})
export class CrearUtensilioComponent {
  // Evento que indica á compoñente nai que se debe pechar a xanela modal
  pechar = output<void>();

  // Campos do formulario
  nome: string = '';
  material: string = '';

  // Engadimos o servizo como propiedade privada da clase
  constructor(private servizo: UtensiliosService) {}

  // Método para crear novos obxectos de tipo utensilio a partires dos datos do formulario
  crear(): void {
    // Construímos un novo obxecto "Utensilio" usando os datos do formulario
    let utensilio: Utensilio = {
      nome : this.nome,
      material: this.material
    };

    // Engadimos o utensilio array a través do servizo
    this.servizo.engadir(utensilio);

    // Informamos á compoñente nai que se debe pechar a xanela modal
    this.pechar.emit();
  }

  // Método que pecha o formulario
  cancelar(): void {
    this.pechar.emit(); // Informamos á compoñente nai que se debe pechar a xanela modal
  }
}
