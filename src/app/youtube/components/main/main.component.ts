import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponseItem } from 'src/app/shared/models/response-item/response-item.model';
import { CardService } from '../../../core/services/card.service';
import { Subscription } from 'rxjs';
import { VisibleConfigService } from '../../../core/services/visible-config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  public entities: ResponseItem[];

  public isViewsDesc: boolean;

  private subscription: Subscription;

  private viewsDescSubscription: Subscription;

  ngOnInit() {
    this.subscription = this.cardService.entities.subscribe(
      (v) => (this.entities = v),
    );

    this.viewsDescSubscription =
      this.visivleConfigService.isViewsDesc.subscribe(
        (v) => (this.isViewsDesc = v),
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.viewsDescSubscription.unsubscribe();
  }

  constructor(
    private cardService: CardService,
    private visivleConfigService: VisibleConfigService,
  ) {}
}
