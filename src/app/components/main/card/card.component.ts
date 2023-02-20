import { Component, Input, OnInit } from '@angular/core';
import { ResponseItem } from '../../../shared/models/response-item/response-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  title = 'more...';

  publicationDate = '';

  @Input() entity: ResponseItem;

  ngOnInit() {
    this.publicationDate = this.entity.snippet.publishedAt;
  }
}
