import { Component, Input, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-contido',
  standalone: true,
  imports: [],
  templateUrl: './contido.component.html',
  styleUrl: './contido.component.css'
})
export class ContidoComponent {
  @Input() compartida: number = 0;
  emisor: OutputEmitterRef<number> = output<number>(); // Nova API OutputEmitterRef<number>

  decrementar(): void {
    this.compartida = this.compartida - 1;
    this.emisor.emit(this.compartida);
  }
}