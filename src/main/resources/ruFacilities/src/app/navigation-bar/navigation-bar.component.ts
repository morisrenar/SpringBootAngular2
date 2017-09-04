import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {User} from "../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInFormVisibility: boolean;
  signUpFormVisibility: boolean;

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  token: string;


  constructor(private authService: AuthService, private router: Router) {
    this.loggedInFormVisibility = false;
    this.signUpFormVisibility = false;
  }

  ngOnInit() {
    if(typeof this.currentUser != "undefined" && this.currentUser != null) {
      this.token = this.currentUser.token;
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  onLogout() {
    this.isLoggedIn = false;
    this.authService.discardAuth();
    this.router.navigateByUrl("home");
  }

  onSignedIn(user: User) {
    this.isLoggedIn = true;
    this.loggedInFormVisibility = false;
  }

  onClickLogIn() {
    this.loggedInFormVisibility = true;
    this.router.navigateByUrl("home");
  }

  onClickSignUp() {
    this.signUpFormVisibility = true;
  }

  onSignedUp() {
    this.signUpFormVisibility = false;
    this.router.navigateByUrl("home");
  }

}
