import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/shared-root/pages/not-found/not-found.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./shared/shared-root/shared-root.module').then(
        (m) => m.SharedRootModule,
      ),
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
