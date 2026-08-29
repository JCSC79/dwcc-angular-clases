import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaxe',
  standalone: true,
  imports: [],
  templateUrl: './mensaxe.component.html',
  styleUrl: './mensaxe.component.css'
})
export class MensaxeComponent {
  mensaxe: string = 'Ola mundo!';
}
