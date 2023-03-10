import { Component } from '@angular/core';
import { VisibleConfigService } from '../../../services/visible-config.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public value = '';

  public title = 'search';

  public btnSearchTitle = 'search';

  public showFilter() {
    this.visibleConfigService.toggleFilterVisible();
  }

  public toggleVisibleCards() {
    this.visibleConfigService.toggleVisible();
  }

  public clear() {
    this.value = '';
  }

  constructor(private visibleConfigService: VisibleConfigService) {}
}
