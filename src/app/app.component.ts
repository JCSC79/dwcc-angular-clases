import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Repaso Guards';
  acceso: boolean = false;

  cambiar(): void {
    this.acceso = !this.acceso;
    localStorage.setItem("acceso", this.acceso.toString());
  }
}
