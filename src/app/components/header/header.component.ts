import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isShowFilters = false;

  toggleFilter() {
    this.isShowFilters = !this.isShowFilters;
  }
}
