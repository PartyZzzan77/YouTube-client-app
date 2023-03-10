import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  outFilterCards = new EventEmitter<string>();

  @Output()
  outOrderViews = new EventEmitter<boolean>();

  public value = '';

  public title = 'sorting by:';

  public countCriteria = 'views';

  public filterCards() {
    this.outFilterCards.emit(this.value);
  }

  public setOrderViews(value: boolean) {
    this.outOrderViews.emit(!value);
  }

  public clear() {
    this.value = '';
    this.outFilterCards.emit(this.value);
  }
}
