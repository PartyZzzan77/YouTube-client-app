import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ResponseItem } from 'src/app/shared/models/response-item/response-item.model';
import { CardService } from '../../../core/services/card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  @Input()
  isShowCards: boolean;

  public entities: ResponseItem[];
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.cardService.entities.subscribe(
      (v) => (this.entities = v),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private cardService: CardService) {}
}
