import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import "rxjs/add/operator/map";;
import {User} from "../model/user";

@Injectable()
export class UserService {

  _postUrl = "http://localhost:8080/users";

  //currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //token = this.currentUser.token;

  headers = new Headers({
    "Content-Type": "application/json",
    //"Authorization": this.token
  });

  constructor(private _http: Http) { }

  createUser(user: User) {
    const options = new RequestOptions({headers: this.headers});

    console.log("Creating the user in facility service: " + user);

    return this._http.post(this._postUrl, JSON.stringify(user), options)
      .map((res: Response) => {
        console.log("In the response of create user");
        return res.json() || {};
      });
  }
}
