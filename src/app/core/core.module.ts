import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularMuiModule } from 'src/app/shared/angular-mui/angular-mui.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { FilterComponent } from 'src/app/core/components/filter/filter.component';
import { SearchComponent } from 'src/app/core/components/header/search/search.component';
import { AccountComponent } from 'src/app/core/components/header/account/account.component';

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
