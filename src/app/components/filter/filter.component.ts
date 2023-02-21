import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() isShowFilters: boolean;

  value = '';

  title = 'sorting by:';

  dateCriteria = 'date';

  countCriteria = 'count of views';

  sentanceCriteria = 'by word or sentance';
}
