import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente que demuestra Property Binding en Angular
 * Property Binding permite vincular propiedades de la clase con atributos HTML
 * usando la sintaxis [atributo]="propiedad"
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Título de la aplicación
  title = 'T05E04 - Property Binding (Enlazado de Propiedades)';
  
  // URL de la documentación oficial de Angular
  // Esta propiedad se vinculará al atributo 'href' del elemento <a>
  documentacion: string = 'https://angular.dev/docs';
  
  // URL del logo de Angular
  // Esta propiedad se vinculará al atributo 'src' del elemento <img>
  logo: string = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
}
