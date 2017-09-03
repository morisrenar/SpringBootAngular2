import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Facilities} from "../model/facilities";
import {FacilityService} from "../model/facility-service";

@Injectable()
export class FacilityServiceService {

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

  createFacilityService(facility: Facilities, facilityService: FacilityService) {
    const options = new RequestOptions({headers: this.headers});

    return this._http.post(this._postUrl + "/" + facility.facilitiesId +  "/facilityServices", JSON.stringify(facilityService), options)
      .map((res: Response) => {
        return res.json() || {};
      });
  }

  getFacilityService(facility: Facilities) {
    const options = new RequestOptions({headers: this.headers});

    return this._http.get(this._getUrl + "/" + facility.facilitiesId +  "/facilityServices", options)
      .map((response: Response) => response.json());
  }

  updateFacilityService(facility: Facilities, facilityService: FacilityService) {
    const options = new RequestOptions({headers: this.headers});

    return this._http.put(this._putUrl + "/" + facility.facilitiesId +  "/facilityServices/" + facilityService.facilityServicesId, JSON.stringify(facilityService), options)
      .map((res: Response) => {
        return res.json() || {};
      });
  }

  deleteFacilityService(facility: Facilities, facilityService: FacilityService) {
    const options = new RequestOptions(
      {
        headers: this.headers,
        body: facilityService
      });

    const finalDeleteUrl = this._deleteUrl + "/" + facility.facilitiesId +  "/facilityServices/" + facilityService.facilityServicesId;

    return this._http.delete(finalDeleteUrl, options)
      .map( (res: Response) => {});
  }

}
