import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedRootComponent } from 'src/app/shared/shared-root/components/shared-root/shared-root.component';
import { AngularMuiModule } from 'src/app/shared/angular-mui/angular-mui.module';
import { CoreModule } from 'src/app/core/core.module';
import { YoutubeModule } from 'src/app/youtube/youtube.module';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SharedRootComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  declarations: [SharedRootComponent],
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
