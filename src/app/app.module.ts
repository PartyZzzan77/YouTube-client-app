import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CardsListComponent } from './components/main/cards-list/cards-list.component';
import { CardComponent } from './components/main/card/card.component';
import { SearchComponent } from './components/header/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { AccountComponent } from './components/header/account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { StatisticsComponent } from './components/main/card/statistics/statistics.component';
import { PublicationDateStatusDirective } from './publication-date-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CardsListComponent,
    CardComponent,
    SearchComponent,
    FilterComponent,
    AccountComponent,
    StatisticsComponent,
    PublicationDateStatusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
