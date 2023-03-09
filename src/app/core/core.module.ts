import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMuiModule } from '../shared/angular-mui/angular-mui.module';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchComponent } from './components/header/search/search.component';
import { AccountComponent } from './components/header/account/account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FilterComponent,
    SearchComponent,
    AccountComponent,
  ],
  imports: [CommonModule, AngularMuiModule, FormsModule],
  exports: [
    HeaderComponent,
    FilterComponent,
    SearchComponent,
    AccountComponent,
  ],
})
export class CoreModule {}
