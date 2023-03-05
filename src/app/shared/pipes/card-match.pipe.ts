import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '../models/response-item/response-item.model';

@Pipe({
  name: 'cardMatch',
})
export class CardMatchPipe implements PipeTransform {
  transform(cards: ResponseItem[], value: string): ResponseItem[] {
    if (!value) {
      return cards;
    }

    return cards.filter((c) => c.snippet.title.toLowerCase().includes(value.toLowerCase().trim()));
  }
}
