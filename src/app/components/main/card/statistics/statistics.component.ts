import { Component, Input } from '@angular/core';
import { Statistics } from '../../../../shared/models/response-item/statistics.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  @Input() statistics: Statistics;
}
