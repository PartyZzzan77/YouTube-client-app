import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';

import { SharedRootComponent } from 'src/app/shared/shared-root/components/shared-root/shared-root.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { CardsListComponent } from 'src/app/components/main/cards-list/cards-list.component';
import { CardComponent } from 'src/app/components/main/card/card.component';
import { SearchComponent } from 'src/app/core/components/header/search/search.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { AccountComponent } from 'src/app/core/components/header/account/account.component';
import { StatisticsComponent } from 'src/app/components/main/card/statistics/statistics.component';
import { PublicationDateStatusDirective } from 'src/app/derectives/publication-date-status.directive';
import { CardMatchPipe } from 'src/app/shared/pipes/card-match.pipe';
import { OrderPipe } from 'src/app/shared/pipes/order.pipe';

@NgModule({
  declarations: [
    SharedRootComponent,
    HeaderComponent,
    MainComponent,
    CardsListComponent,
    CardComponent,
    SearchComponent,
    FilterComponent,
    AccountComponent,
    StatisticsComponent,
    PublicationDateStatusDirective,
    CardMatchPipe,
    OrderPipe,
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatBadgeModule,
    CommonModule,
  ],
  exports: [SharedRootComponent],
})
export class SharedRootModule {}
