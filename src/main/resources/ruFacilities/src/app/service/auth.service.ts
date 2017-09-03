import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {User} from "../model/user";

@Injectable()
export class AuthService {

  _postUrl = "http://localhost:8080/login";
  _logOutUrl = "http://localhost:8080/logout";
  constructor(private _http: Http) { }

  makeAuth(user: User) {
    console.log("Post request to " + this._postUrl);
    const headers = new Headers({"Content-Type": "application/json"});
    const options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(user), options)
      .map((res: Response) => {} );
  }

  discardAuth() {
    console.log("Logging out the user");

    localStorage.setItem('currentUser', null);

    console.log("Logout url to " + this._logOutUrl);
    const headers = new Headers({"Content-Type": "application/json"});
    const options = new RequestOptions({headers: headers});
    return this._http.get(this._logOutUrl, options)
      .map((res: Response) => {} );
  }

}
