import { Component, ViewChild } from '@angular/core';
import { Gato } from '../gato';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule, MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-paxinacion',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './paxinacion.component.html',
  styleUrl: './paxinacion.component.css'
})
export class PaxinacionComponent {
  gatos: Gato[] = [
    { nome: "Misi", raza: "Siamés", idade: 3 },
    { nome: "Luna", raza: "Persa", idade: 5 },
    { nome: "Simba", raza: "Maine Coon", idade: 2 },
    { nome: "Nala", raza: "Bengalí", idade: 4 },
    { nome: "Thor", raza: "Ragdoll", idade: 1 },
    { nome: "Bella", raza: "British Shorthair", idade: 6 },
    { nome: "Oliver", raza: "Sphynx", idade: 3 },
    { nome: "Chloe", raza: "Birmano", idade: 2 },
    { nome: "Leo", raza: "Noruegués da Bosque", idade: 4 },
    { nome: "Milo", raza: "Abisinio", idade: 1 },
    { nome: "Lucy", raza: "Siberiano", idade: 5 },
    { nome: "Charlie", raza: "Exótico", idade: 2 },
    { nome: "Lily", raza: "Scottish Fold", idade: 3 },
    { nome: "Max", raza: "Azul Ruso", idade: 4 },
    { nome: "Sophie", raza: "Manx", idade: 2 },
    { nome: "Jack", raza: "Oriental", idade: 1 },
    { nome: "Cleo", raza: "Tonquinés", idade: 5 },
    { nome: "Tiger", raza: "Savannah", idade: 3 },
    { nome: "Daisy", raza: "Chartreux", idade: 4 },
    { nome: "Oscar", raza: "Cornish Rex", idade: 2 },
    { nome: "Mia", raza: "Devon Rex", idade: 1 },
    { nome: "Jasper", raza: "Himalaio", idade: 6 },
    { nome: "Ruby", raza: "Bombay", idade: 3 },
    { nome: "Sam", raza: "Burmés", idade: 4 },
    { nome: "Lola", raza: "Selkirk Rex", idade: 2 },
    { nome: "Buddy", raza: "LaPerm", idade: 1 },
    { nome: "Zoe", raza: "Singapura", idade: 5 },
    { nome: "Rocky", raza: "Somalí", idade: 3 },
    { nome: "Coco", raza: "Korat", idade: 4 },
    { nome: "Shadow", raza: "American Shorthair", idade: 2 },
    { nome: "Molly", raza: "European Shorthair", idade: 1 },
    { nome: "Felix", raza: "Turkish Van", idade: 5 },
    { nome: "Angel", raza: "Turkish Angora", idade: 3 },
    { nome: "Gizmo", raza: "Munchkin", idade: 4 },
    { nome: "Loki", raza: "Pixiebob", idade: 2 },
    { nome: "Misty", raza: "Bobtail Xaponés", idade: 1 },
    { nome: "Pepper", raza: "Peterbald", idade: 5 },
    { nome: "Sasha", raza: "Ocicat", idade: 3 },
    { nome: "Toby", raza: "Serengeti", idade: 4 },
    { nome: "Willow", raza: "Chausie", idade: 2 },
    { nome: "Boo", raza: "Toyger", idade: 1 },
    { nome: "Maggie", raza: "Egyptian Mau", idade: 5 },
    { nome: "Simon", raza: "Balinese", idade: 3 },
    { nome: "Princess", raza: "Javanés", idade: 4 },
    { nome: "Bear", raza: "Lykoi", idade: 2 },
    { nome: "Nina", raza: "Highlander", idade: 1 },
    { nome: "Gracie", raza: "Napoleón", idade: 5 },
    { nome: "Louie", raza: "Khao Manee", idade: 3 },
    { nome: "Stella", raza: "Donskoy", idade: 4 }
  ];
  columnas: string[] = ['NOME','RAZA','IDADE']; // Este array define os nomes das cabeceiras de columna no MAT TABLE
  datos = new MatTableDataSource<Gato>(this.gatos);

  @ViewChild(MatPaginator) paxinador!: MatPaginator;

  ngAfterViewInit(): void {
    this.datos.paginator = this.paxinador;
  }
}
