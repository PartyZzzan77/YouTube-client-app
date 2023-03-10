import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMuiModule } from '../shared/angular-mui/angular-mui.module';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
  },
];
@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild(routes), CommonModule, AngularMuiModule],
})
export class AuthModule {}
