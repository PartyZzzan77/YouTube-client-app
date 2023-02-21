import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isShowFilters = false;

  @Input() isShowCards: boolean;

  @Output() outShowCards = new EventEmitter<boolean>();

  toggleFilter() {
    this.isShowFilters = !this.isShowFilters;
  }

  showCards() {
    this.outShowCards.emit(true);
  }
}
