import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isShowFilters = false;

  @Input() isShowCards: boolean;

  @Input() orderViews: boolean;

  @Output() outShowCards = new EventEmitter<boolean>();

  @Output() outFilterCards = new EventEmitter<string>();

  @Output() outOrderViews = new EventEmitter<boolean>();

  toggleFilter() {
    this.isShowFilters = !this.isShowFilters;
  }

  showCards() {
    this.outShowCards.emit(true);
  }

  filterCards(value: string) {
    this.outFilterCards.emit(value);
  }

  setOrderViews(value: boolean) {
    this.outOrderViews.emit(value);
  }
}
