import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-root',
  templateUrl: './shared-root.component.html',
  styleUrls: ['./shared-root.component.scss'],
})
export class SharedRootComponent {
  title = 'YouTube-client-app';
  orderViews: boolean = false;

  isShowCards = false;

  showCards() {
    this.isShowCards = true;
  }

  setOrderViews(value: boolean) {
    this.orderViews = value;
  }
}
