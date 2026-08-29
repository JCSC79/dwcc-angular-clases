import { Component, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-filla',
  standalone: true,
  imports: [],
  templateUrl: './filla.component.html',
  styleUrl: './filla.component.css'
})
export class FillaComponent {
  // Definimos o output usando a nova función output()
  mensaxe: OutputEmitterRef<string> = output<string>();

  // Emitimos o valor usando .emit()
  enviar(): void {
    this.mensaxe.emit("Ola mundo!");
  }
}
