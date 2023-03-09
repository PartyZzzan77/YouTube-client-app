import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { AngularMuiModule } from '../shared/angular-mui/angular-mui.module';
import { CardsListComponent } from './components/main/cards-list/cards-list.component';
import { CardComponent } from './components/main/card/card.component';
import { StatisticsComponent } from './components/main/card/statistics/statistics.component';
import { PublicationDateStatusDirective } from '../shared/directives/publication-date-status.directive';

@NgModule({
  declarations: [
    MainComponent,
    CardsListComponent,
    CardComponent,
    StatisticsComponent,
    PublicationDateStatusDirective,
  ],
  imports: [CommonModule, AngularMuiModule],
  exports: [
    MainComponent,
    CardsListComponent,
    CardComponent,
    StatisticsComponent,
    PublicationDateStatusDirective,
  ],
})
export class YoutubeModule {}
