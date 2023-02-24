import { Component } from '@angular/core';
import { mockEntities } from '../../../../../mocks/mock';
import { ResponseItem } from '../../../../models/response-item/response-item.model';

@Component({
  selector: 'app-shared-root',
  templateUrl: './shared-root.component.html',
  styleUrls: ['./shared-root.component.scss'],
})
export class SharedRootComponent {
  title = 'YouTube-client-app';

  filterSearchString = '';

  orderViews: boolean = false;

  isShowCards = false;

  showCards() {
    this.isShowCards = true;
  }

  filterCards(value: string) {
    this.filterSearchString = value;
  }

  setOrderViews(value: boolean) {
    this.orderViews = value;
  }

  entities: ResponseItem[] = mockEntities;
}
