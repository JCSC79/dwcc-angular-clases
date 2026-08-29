import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filla.component.html',
  styleUrl: './filla.component.css'
})
export class FillaComponent {
  @Input() texto!: string;
}
