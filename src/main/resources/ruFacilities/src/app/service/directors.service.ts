import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Facilities} from "../model/facilities";
import {Directors} from "../model/directors";

@Injectable()
export class DirectorsService {

  _getUrl = "http://localhost:8080/ru/facilities/";
  _putUrl = "http://localhost:8080/ru/facilities";
  _deleteUrl = "http://localhost:8080/ru/facilities";
  _postUrl = "http://localhost:8080/ru/facilities";

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  token = this.currentUser.token;

  headers = new Headers({
    "Content-Type": "application/json",
    "Authorization": this.token
  });

  constructor(private _http: Http) { }

  createDirectors(facility: Facilities, directors: Directors) {
    const options = new RequestOptions({headers: this.headers});

    return this._http.post(this._postUrl + "/" + facility.facilitiesId +  "/directors", JSON.stringify(directors), options)
      .map((res: Response) => {
        return res.json() || {};
      });
  }

  getDirectors(facility: Facilities) {
    const options = new RequestOptions({headers: this.headers});

    return this._http.get(this._getUrl + "/" + facility.facilitiesId +  "/directors", options)
      .map((response: Response) => response.json());
  }

  updateDirectors(facility: Facilities, directors: Directors) {
    const options = new RequestOptions({headers: this.headers});

    return this._http.put(this._putUrl + "/" + facility.facilitiesId +  "/directors/" + directors.facilitiesDirectorsId, JSON.stringify(directors), options)
      .map((res: Response) => {
        return res.json() || {};
      });
  }

  deleteDirectors(facility: Facilities, directors: Directors) {
    const options = new RequestOptions(
      {
        headers: this.headers,
        body: directors
      });

    const finalDeleteUrl = this._deleteUrl + "/" + facility.facilitiesId +  "/directors/" + directors.facilitiesDirectorsId;

    return this._http.delete(finalDeleteUrl, options)
      .map( (res: Response) => {});
  }

}
