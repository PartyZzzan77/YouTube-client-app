import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from 'src/app/youtube/components/main/main.component';
import { AngularMuiModule } from 'src/app/shared/angular-mui/angular-mui.module';
import { CardsListComponent } from 'src/app/youtube/components/main/cards-list/cards-list.component';
import { CardComponent } from 'src/app/youtube/components/main/card/card.component';
import { StatisticsComponent } from 'src/app/youtube/components/main/card/statistics/statistics.component';
import { PublicationDateStatusDirective } from 'src/app/shared/directives/publication-date-status.directive';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { DetailsComponent } from 'src/app/youtube/pages/details/details/details.component';
import { OrderPipe } from './pipes/order.pipe';

const routes: Routes = [
  {
    path: ':id',
    canActivate: [AuthGuard],
    component: DetailsComponent,
  },
];

@NgModule({
  declarations: [
    MainComponent,
    CardsListComponent,
    CardComponent,
    StatisticsComponent,
    PublicationDateStatusDirective,
    DetailsComponent,
    OrderPipe,
  ],
  imports: [CommonModule, AngularMuiModule, RouterModule.forChild(routes)],
  exports: [
    MainComponent,
    CardsListComponent,
    CardComponent,
    StatisticsComponent,
    PublicationDateStatusDirective,
  ],
})
export class YoutubeModule {}
