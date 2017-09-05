import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Facilities} from "../../model/facilities";

@Injectable()
export class EmergencyContactsService {

  _getUrl = "http://localhost:8080/ru/facilities/";
  _putUrl = "http://localhost:8080/ru/facilities";
  _deleteUrl = "http://localhost:8080/ru/facilities";
  _postUrl = "http://localhost:8080/ru/facilities";

  genericPropertyRouting = "/emergencyContact/";

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  token = this.currentUser.token;

  headers = new Headers({
    "Content-Type": "application/json",
    "Authorization": this.token
  });

  constructor(private _http: Http) { }

  createGenericObjects(facility: Facilities, genericPropertyObject: any) {
    const options = new RequestOptions({headers: this.headers});

    return this._http.post(this._postUrl + "/" + facility.facilitiesId + this.genericPropertyRouting, JSON.stringify(genericPropertyObject), options)
      .map((res: Response) => {
        return res.json() || {};
      });
  }

  getGenericObjects(facility: Facilities) {
    const options = new RequestOptions({headers: this.headers});

    return this._http.get(this._getUrl + "/" + facility.facilitiesId +  this.genericPropertyRouting, options)
      .map((response: Response) => response.json());
  }

  updateGenericObjects(facility: Facilities, genericPropertyObject: any) {
    const options = new RequestOptions({headers: this.headers});

    return this._http.put(this._putUrl + "/" + facility.facilitiesId +  this.genericPropertyRouting + genericPropertyObject.medicalCenterEmergencyContactId, JSON.stringify(genericPropertyObject), options)
      .map((res: Response) => {
        return res.json() || {};
      });
  }

  deleteGenericObjects(facility: Facilities, genericPropertyObject: any) {
    const options = new RequestOptions(
      {
        headers: this.headers,
        body: genericPropertyObject
      });

    const finalDeleteUrl = this._deleteUrl + "/" + facility.facilitiesId +  this.genericPropertyRouting + genericPropertyObject.medicalCenterEmergencyContactId;

    return this._http.delete(finalDeleteUrl, options)
      .map( (res: Response) => {});
  }

}
