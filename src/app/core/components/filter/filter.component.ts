import { Component } from '@angular/core';
import { CardService } from '../../services/card.service';
import { VisibleConfigService } from '../../services/visible-config.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public value = '';

  public title = 'sorting by:';

  public countCriteria = 'views';

  public filterCards(value: string) {
    this.cardService.filterEntities(value);
  }

  public reset() {
    this.cardService.reset();
  }

  public toggleOrderViews() {
    this.visibleConfigService.toggleOrderViews();
  }

  constructor(
    private cardService: CardService,
    private visibleConfigService: VisibleConfigService,
  ) {}
}
