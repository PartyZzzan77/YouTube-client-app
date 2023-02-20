import { Component } from '@angular/core';
import { ResponseItem } from './shared/models/response-item/response-item.model';
import { mockEntities } from './Mocks/mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'YouTube-client-app';

  entities: ResponseItem[] = mockEntities;
}
