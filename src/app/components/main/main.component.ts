import { Component, Input } from '@angular/core';
import { ResponseItem } from '../../shared/models/response-item/response-item.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input() isShowCards: boolean;

  @Input() entities: ResponseItem[];
}
