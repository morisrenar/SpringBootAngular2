import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Facilities} from "../model/facilities";

@Injectable()
export class FacilitiesService {

  _getUrl = "http://localhost:8080/ru/facilities";
  _putUrl = "http://localhost:8080/ru/facilities";
  _deleteUrl = "http://localhost:8080/ru/facilities";
  _postUrl = "http://localhost:8080/ru/facilities";

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  token = this.currentUser.token;

  headers = new Headers({
    "Content-Type": "application/json",
    "Authorization": this.token
  });

  constructor(private _http: Http) {

  }

  createFacilities(facility: Facilities) {
    const options = new RequestOptions({headers: this.headers});

    return this._http.post(this._postUrl, JSON.stringify(facility), options)
      .map((res: Response) => {
        return res.json() || {};
      });
  }

  getFacilities() {

    console.log("Token is: " + JSON.stringify(this.token));
    console.log("Name is: " + JSON.stringify(this.currentUser.name));

    const options = new RequestOptions({headers: this.headers});

    return this._http.get(this._getUrl, options)
      .map((response: Response) => response.json());
  }

  updateFacilities(facility: Facilities) {
      const options = new RequestOptions({headers: this.headers});

      return this._http.put(this._putUrl + "/" + facility.facilitiesId, JSON.stringify(facility), options)
        .map((res: Response) => {
          return res.json() || {};
        });
    }

  deleteFacilities(facility: Facilities) {
    const options = new RequestOptions(
      {
        headers: this.headers,
        body: facility
      });
    console.log("Deleting: " + facility);
    return this._http.delete(this._deleteUrl + "/" + facility.facilitiesId, options)
      .map( (res: Response) => {});
  }
}
