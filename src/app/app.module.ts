import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { NotFoundComponent } from 'src/app/shared/shared-root/pages/not-found/not-found.component';
import { AngularMuiModule } from 'src/app/shared/angular-mui/angular-mui.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMuiModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
