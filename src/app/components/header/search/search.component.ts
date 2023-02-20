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

  @Output() outputShowFilter = new EventEmitter<boolean>();

  clear() {
    this.value = '';
  }

  showFilter() {
    this.outputShowFilter.emit(true);
    this.clear();
  }
}
