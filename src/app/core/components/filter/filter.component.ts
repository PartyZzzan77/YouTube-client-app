import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input()
  isShowFilters: boolean;

  @Input()
  orderViews: boolean;

  @Output()
  outOrderViews = new EventEmitter<boolean>();

  public value = '';

  public title = 'sorting by:';

  public countCriteria = 'views';

  public filterCards(value: string) {
    this.cardService.filterEntities(value);
  }

  public reset() {
    this.cardService.reset();
  }

  public setOrderViews(value: boolean) {
    this.outOrderViews.emit(!value);
  }

  constructor(private cardService: CardService) {}
}
