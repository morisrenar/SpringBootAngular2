import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {User} from "../model/user";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  isLoggedIn: boolean;
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  token: string;


  constructor(private authService: AuthService) { }

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
    console.log("User will be logged out.");
    this.authService.discardAuth();
  }

}
