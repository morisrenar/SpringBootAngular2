import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public token: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignIn(user: User) {
    this.authService.makeAuth(user);
    console.log(user);
    localStorage.setItem('currentUser', JSON.stringify({ token: this.token, name: user.userName }));
  }

}
