import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';

const uiModules = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule,
  MatChipsModule,
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [],
  imports: [...uiModules],
  exports: [...uiModules],
})
export class AngularMuiModule {}
