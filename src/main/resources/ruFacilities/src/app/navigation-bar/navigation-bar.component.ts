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

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  token: string;


  constructor(private authService: AuthService, private router: Router) {
    this.loggedInFormVisibility = false;
  }

  ngOnInit() {
    if(typeof this.currentUser != "undefined" && this.currentUser != null) {
      this.token = this.currentUser.token;
      this.isLoggedIn = true;
      console.log("Logged in user " + this.currentUser.name );
    } else {
      this.isLoggedIn = false;
      console.log("Logged out");
    }
  }

  onLogout() {
    this.isLoggedIn = false;
    this.authService.discardAuth();
    this.router.navigateByUrl("home");
  }

  onSignedIn(user: User) {
    console.log("Logged In");
    this.isLoggedIn = true;
    this.loggedInFormVisibility = false;
  }

  onClickLogIn() {
    this.loggedInFormVisibility = true;
    this.router.navigateByUrl("home");
  }

}
