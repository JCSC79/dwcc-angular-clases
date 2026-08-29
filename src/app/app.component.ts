import { Component } from '@angular/core';
import { TruncarTextoPipe } from './truncar-texto.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TruncarTextoPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes-personalizados';
  textoLongo: string = 'Este é un texto de exemplo moi longo que imos acurtar cun pipe personalizado de Angular. O obxectivo deste pipe será garantir que non se corten as palabras pola metade, senón que se busque o último espazo dentro do límite permitido e se faga o corte nese mesmo lugar, situando puntos suspensivos. Este é un texto de exemplo moi longo que imos acurtar cun pipe personalizado de Angular. O obxectivo deste pipe será garantir que non se corten as palabras pola metade, senón que se busque o último espazo dentro do límite permitido e se faga o corte nese mesmo lugar, situando puntos suspensivos.';
}
