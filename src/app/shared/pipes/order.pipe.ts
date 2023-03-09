import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '../models/response-item/response-item.model';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(cards: ResponseItem[], value: boolean): ResponseItem[] {
    if (!value) {
      return [...cards].sort(
        (a, b) => +a.statistics.viewCount - +b.statistics.viewCount,
      );
    }

    return [...cards].sort(
      (a, b) => +b.statistics.viewCount - +a.statistics.viewCount,
    );
  }
}
