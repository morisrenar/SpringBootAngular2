import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output("userSignedUpEvent")
  private userSignedUpEvent = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSignUp(user: User) {
    user.enabled = 1;
    this.userService.createUser(user);
    console.log("New User Info: " + JSON.stringify(user));
    this.userSignedUpEvent.emit(user);
  }

}
