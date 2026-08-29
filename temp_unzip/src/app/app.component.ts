import { Component } from '@angular/core';
import { Utensilio } from './utensilio';
import { CommonModule } from '@angular/common';
import { CrearUtensilioComponent } from './crear-utensilio/crear-utensilio.component';
import { UtensiliosService } from './utensilios.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CrearUtensilioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Xanelas Modais';
  // Array que conterá os obxectos de tipo utensilio
  utensilios: Utensilio[] = [];
  // Propiedade que determinará se está cargado o formulario modal de crear utensilios
  amosarCrearUtensilio: boolean = false;

  // Engadimos o servizo como propiedade privada da clase
  constructor(private servizo: UtensiliosService) {}

  // Subscribímonos aos cambios no array a través do servizo
  ngOnInit(): void {
    this.servizo.subscribirse().subscribe(utensilios => {
      this.utensilios = utensilios
    });
  }
}
