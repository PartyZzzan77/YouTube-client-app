import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardService } from '../../../../core/services/card.service';
import { Subscription } from 'rxjs';
import { VisibleConfigService } from '../../../../core/services/visible-config.service';

@Component({
  selector: 'app-shared-root',
  templateUrl: './shared-root.component.html',
  styleUrls: ['./shared-root.component.scss'],
})
export class SharedRootComponent implements OnInit, OnDestroy {
  title = 'YouTube-client-app';

  public isShowCards: boolean;

  private showCardsSubscription: Subscription;

  orderViews: boolean = false;

  setOrderViews(value: boolean) {
    this.orderViews = value;
  }

  ngOnInit() {
    this.visibleConfigService.isCardsListVisible.subscribe((v) => {
      this.isShowCards = v;
    });
  }

  ngOnDestroy() {
    this.showCardsSubscription.unsubscribe();
  }

  constructor(
    private cardService: CardService,
    private visibleConfigService: VisibleConfigService,
  ) {}
}
