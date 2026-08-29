import { Component } from '@angular/core';
import { MensaxeriaService } from '../mensaxeria.service';

@Component({
  selector: 'app-receptor',
  standalone: true,
  imports: [],
  templateUrl: './receptor.component.html',
  styleUrl: './receptor.component.css'
})
export class ReceptorComponent {
  texto: string = ''; // Propiedade na que gardamos o valor da mensaxe recibida do servizo

  // Incorporamos o servizo como propiedade privada a través do constructor para que sexa "SINGLETON" (iso significa que tanto o Emisor como o Receptor accederán ao mesmo obxecto servizo)
  constructor(private servizo: MensaxeriaService) { }

  // Cando a compoñente estea lista realizamos a subscrición ao Observable do servizo, o que nos vai permitir ter sempre unha copia actualizada da mensaxe gardada na propiedade 'texto'
  ngOnInit(): void {
    this.servizo.subscribirse().subscribe((mensaxe) => {
      this.texto = mensaxe;
    });
  }

}
