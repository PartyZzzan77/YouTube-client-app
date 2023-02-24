import { Component, Input } from '@angular/core';
import { ResponseItem } from 'src/app/shared/models/response-item/response-item.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent {
  @Input()
  entities: ResponseItem[] = [];
}
