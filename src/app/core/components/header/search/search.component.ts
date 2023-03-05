import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output()
  outToggleFilter = new EventEmitter<boolean>();

  @Output()
  outShowCards = new EventEmitter<boolean>();

  public value = '';

  public title = 'search';

  public btnSearchTitle = 'search';

  public showFilter() {
    this.outToggleFilter.emit(true);
  }

  public showCards() {
    this.outShowCards.emit(true);
  }

  public clear() {
    this.value = '';
  }
}
