import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() isShowFilters: boolean;

  @Input() orderViews: boolean;

  value = '';

  @Output() outFilterCards = new EventEmitter<string>();

  @Output() outOrderViews = new EventEmitter<boolean>();

  title = 'sorting by:';

  countCriteria = 'views';

  filterCards() {
    this.outFilterCards.emit(this.value);
  }

  setOrderViews(value: boolean) {
    this.outOrderViews.emit(!value);
  }

  clear() {
    this.value = '';
    this.outFilterCards.emit(this.value);
  }
}
