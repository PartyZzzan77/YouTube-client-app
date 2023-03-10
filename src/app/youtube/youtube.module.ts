import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AngularMuiModule } from '../shared/angular-mui/angular-mui.module';
import { CardsListComponent } from './components/main/cards-list/cards-list.component';
import { CardComponent } from './components/main/card/card.component';
import { StatisticsComponent } from './components/main/card/statistics/statistics.component';
import { PublicationDateStatusDirective } from '../shared/directives/publication-date-status.directive';
import { AuthGuard } from '../core/guards/auth.guard';
import { DetailsComponent } from './pages/details/details/details.component';

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
