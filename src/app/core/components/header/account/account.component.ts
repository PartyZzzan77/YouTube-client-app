import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public title: string;

  ngOnInit() {
    const user = localStorage.getItem('user');

    if (user) {
      this.title = JSON.parse(user).login;
    } else {
      this.title = 'account';
    }
  }
}
