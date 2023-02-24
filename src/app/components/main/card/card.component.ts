import { Component, Input, OnInit } from '@angular/core';
import { ResponseItem } from 'src/app/shared/models/response-item/response-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  entity: ResponseItem;

  public title = 'more...';

  public publicationDate = '';

  ngOnInit() {
    this.publicationDate = this.entity.snippet.publishedAt;
  }
}
