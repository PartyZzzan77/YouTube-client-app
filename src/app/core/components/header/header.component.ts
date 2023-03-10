import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VisibleConfigService } from '../../services/visible-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isShowFilter: boolean;

  showFilterSubscription: Subscription;

  ngOnInit() {
    this.showFilterSubscription =
      this.visibleConfigService.isFilterVisible.subscribe((v) => {
        this.isShowFilter = v;
      });
  }

  ngOnDestroy() {
    this.showFilterSubscription.unsubscribe();
  }

  constructor(private visibleConfigService: VisibleConfigService) {}
}
