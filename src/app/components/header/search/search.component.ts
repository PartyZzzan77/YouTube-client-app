import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() outToggleFilter = new EventEmitter<boolean>();

  @Output() outShowCards = new EventEmitter<boolean>();

  value = '';

  title = 'search';

  btnSearchTitle = 'search';

  showFilter() {
    this.outToggleFilter.emit(true);
  }

  showCards() {
    this.outShowCards.emit(true);
  }

  clear() {
    this.value = '';
  }
}
