import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public SubmitLabel = 'Submit';

  public isInvalid = '';

  private loginField: string;

  private passwordField: string;

  private checkAuth = () => {
    if (!this.loginField || !this.passwordField) {
      this.isInvalid = 'required fields login & password';
    } else {
      this.isInvalid = '';
    }
  };

  public setLogin(value: string) {
    this.loginField = value;
  }

  public setPassword(value: string) {
    this.passwordField = value;
  }

  handleSubmit() {
    this.checkAuth();
    if (this.isInvalid) return;

    const user = JSON.stringify({
      login: this.loginField,
      password: this.passwordField,
    });

    localStorage.setItem('user', user);

    this.router.navigate(['/main']);
  }

  constructor(private router: Router) {}
}
