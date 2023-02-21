import { Component } from '@angular/core';
import { ResponseItem } from './shared/models/response-item/response-item.model';
import { mockEntities } from './mocks/mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
