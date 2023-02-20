import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  value = '';

  title = 'search';
  btnSearchTitle = 'search';
  @Output() onShowFilter = new EventEmitter<boolean>();

  showFilter() {
    this.value = '';
    this.onShowFilter.emit(true);
  }
}
