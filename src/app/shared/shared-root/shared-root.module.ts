import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRootComponent } from 'src/app/shared/shared-root/components/shared-root/shared-root.component';
import { OrderPipe } from 'src/app/shared/pipes/order.pipe';
import { AngularMuiModule } from '../angular-mui/angular-mui.module';
import { CoreModule } from '../../core/core.module';
import { YoutubeModule } from '../../youtube/youtube.module';

@NgModule({
  declarations: [SharedRootComponent, OrderPipe],
  imports: [CommonModule, AngularMuiModule, CoreModule, YoutubeModule],
  exports: [SharedRootComponent],
})
export class SharedRootModule {}
