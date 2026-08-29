import { Component } from '@angular/core';
import { EmisorComponent } from './emisor/emisor.component';
import { ReceptorComponent } from './receptor/receptor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmisorComponent, ReceptorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exercicio de Repaso de Comunicación entre Compoñentes';
}
