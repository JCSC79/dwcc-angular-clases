import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncarTexto',
  standalone: true
})
export class TruncarTextoPipe implements PipeTransform {

  // O noso pipe vai recibir como parámetro un texto e un número máximo de carácteres (se non se indica un máximo, este será 200)
  transform(texto: string, lonxitude: number = 200): string {
    // Se non se recibe ningún texto, devolvemos cadea baleira
    if (!texto) {
      return '';
    }

    // Se o texto xa é máis curto ou igual á lonxitude máxima permitida, devólvemlo tal como está
    if (texto.length <= lonxitude) {
      return texto;
    }

    // Procuramos o último espazo antes da lonxitude máxima indicada
    let puntoCorte = texto.lastIndexOf(' ', lonxitude);

    // Se non hai espazos dentro do límite, cortamos directamente na lonxitude máxima
    if (puntoCorte === -1) {
      puntoCorte = lonxitude;
    }

    // Retornamos o texto truncado na posición atopada concatenado aos puntos suspensivos
    return texto.substring(0, puntoCorte) + '...';
  }

}
