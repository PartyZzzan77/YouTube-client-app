import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  public message = 'Sorry, smth went wrong';
  public imageAlt = 'Page not found';

  public back = 'back to home';

  public goHome() {
    this.router.navigate(['/main']);
  }

  constructor(private router: Router) {}
}
