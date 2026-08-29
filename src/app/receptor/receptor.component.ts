import { Component, ElementRef, ViewChild } from '@angular/core';
import { CoresService } from '../cores.service';

@Component({
  selector: 'app-receptor',
  standalone: true,
  imports: [],
  templateUrl: './receptor.component.html',
  styleUrl: './receptor.component.css'
})
export class ReceptorComponent {
  @ViewChild('caixa') caixa!: ElementRef<HTMLElement>;

  constructor(private servizoCores: CoresService) { }

  ngOnInit(): void {
    this.servizoCores.subscribirse$().subscribe(cor => {
      this.caixa.nativeElement.style.backgroundColor = cor;
    });
  }
}
