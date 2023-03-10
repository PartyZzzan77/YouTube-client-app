import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRootComponent } from 'src/app/shared/shared-root/components/shared-root/shared-root.component';
import { OrderPipe } from 'src/app/shared/pipes/order.pipe';
import { AngularMuiModule } from '../angular-mui/angular-mui.module';
import { CoreModule } from '../../core/core.module';
import { YoutubeModule } from '../../youtube/youtube.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SharedRootComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  declarations: [SharedRootComponent, OrderPipe],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AngularMuiModule,
    CoreModule,
    YoutubeModule,
  ],
  exports: [SharedRootComponent],
})
export class SharedRootModule {}
