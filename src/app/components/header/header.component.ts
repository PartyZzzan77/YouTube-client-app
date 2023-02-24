import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  isShowCards: boolean;

  @Input()
  orderViews: boolean;

  @Output()
  outShowCards = new EventEmitter<boolean>();

  @Output()
  outFilterCards = new EventEmitter<string>();

  @Output()
  outOrderViews = new EventEmitter<boolean>();

  public isShowFilters = false;

  public toggleFilter() {
    this.isShowFilters = !this.isShowFilters;
  }

  public showCards() {
    this.outShowCards.emit(true);
  }

  public filterCards(value: string) {
    this.outFilterCards.emit(value);
  }

  public setOrderViews(value: boolean) {
    this.outOrderViews.emit(value);
  }
}
