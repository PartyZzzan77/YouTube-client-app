import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public SubmitLabel = 'Submit';
  private loginField: string;
  private passwordField: string;

  setLogin(value: string) {
    this.loginField = value;
  }
  setPassword(value: string) {
    this.passwordField = value;
  }

  handleSubmit() {
    const user = JSON.stringify({
      login: this.loginField,
      password: this.passwordField,
    });

    localStorage.setItem('user', user);

    this.router.navigate(['/main']);
  }
  constructor(private router: Router) {}
}
