import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Facilities} from "../model/facilities";
import {FacilitiesService} from "../service/facilities.service";
import {Directors} from "../model/directors";
import {DirectorsService} from "../service/directors.service";
import {FacilityServiceService} from "../service/facility-service.service";
import {FacilityService} from "../model/facility-service";

@Component({
  selector: 'app-facilities-center',
  templateUrl: './facilities-center.component.html',
  styleUrls: ['./facilities-center.component.css']
})
export class FacilitiesCenterComponent implements OnInit {

  selectedFacility: Facilities;
  private hideNewFacility: boolean = true;

  visibilityStatusDirectors: boolean;
  visibilityStatusEvents: boolean;
  visibilityStatusFacilityService: boolean;
  visibilityStatusFields: boolean;
  visibilityStatusOfficers: boolean;
  visibilityStatusSchedulings: boolean;
  visibilityStatusStuffs: boolean;
  visibilityStatusTasks: boolean;


  @Output("newSelectedFacilityEvent")
  private newSelectedFacilityEvent = new EventEmitter();

  private isEmbedded: boolean;

  facilities: Array<Facilities> = [];
  directors: Array<Directors> = [];
  facilityServices: Array<FacilityService> = [];

  constructor(private facilitiesService: FacilitiesService,
              private directorsService: DirectorsService,
              private facilityServiceService: FacilityServiceService) {

    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));

    this.visibilityStatusDirectors = false;
    this.visibilityStatusEvents = false;
    this.visibilityStatusFacilityService = false;
    this.visibilityStatusFields = false;
    this.visibilityStatusOfficers = false;
    this.visibilityStatusSchedulings = false;
    this.visibilityStatusStuffs = false;
    this.visibilityStatusTasks = false;

    if(this.isEmbedded == true) {
      this.facilities = [];
      this.directors = [];
      this.facilityServices = [];
    } else {
      this.facilities = [
        {"facilitiesId": "id 1", "facilitiesName": "name 1", "facilitiesInfo": "info 1"},
        {"facilitiesId": "id 2", "facilitiesName": "name 2", "facilitiesInfo": "info 2"},
        {"facilitiesId": "id 3", "facilitiesName": "name 3", "facilitiesInfo": "info 3"}
      ];
      this.directors = [{
        "facilitiesDirectorsId": "director id 1",
        "facilitiesDirectorsName": "director name",
        "facilitiesDirectorsEmail": "director name",
        "facilitiesDirectorsPhone": "director phone",
        "facilitiesDirectorsRoom": "director room",
        "facilitiesDirectorsInfo": "director info",
        "facilitiesDirectorsPosition": "director position",
        "facilitiesDirectorsPositionName": "director name",
        "facilitiesDirectorsEx1": "director extra information",
        "facilities": {
          "facilitiesId": "id 1",
          "facilitiesName": "name 1",
          "facilitiesInfo": "info 1"
        }
      }, {
        "facilitiesDirectorsId": "director id 2",
        "facilitiesDirectorsName": "director name 2",
        "facilitiesDirectorsEmail": "director name 2",
        "facilitiesDirectorsPhone": "director phone",
        "facilitiesDirectorsRoom": "director room",
        "facilitiesDirectorsInfo": "director info 2",
        "facilitiesDirectorsPosition": "director position",
        "facilitiesDirectorsPositionName": "director name",
        "facilitiesDirectorsEx1": "director extra information",
        "facilities": {
          "facilitiesId": "id 2",
          "facilitiesName": "name 1",
          "facilitiesInfo": "info 1"
        }
      }];
      this.facilityServices = [{
        "facilityServicesId": "facility service id",
        "facilityServicesName": "facility service name",
        "facilityServicesInfo": "facility service info",
        "facilities": {
          "facilitiesId": "id 1",
          "facilitiesName": "name 1",
          "facilitiesInfo": "info 1"
        }
      }];
    }
  }

  ngOnInit() {
    if(this.isEmbedded == true) {
      this.facilitiesService.getFacilities().subscribe(resFacilities => this.facilities = resFacilities);
    }
  }

  onSelectFacility(facility: Facilities) {
    this.selectedFacility = facility;
    if(this.isEmbedded == true) {
      this.directorsService.getDirectors(this.selectedFacility).subscribe(resDirectors => this.directors = resDirectors);
      this.facilityServiceService.getFacilityService(this.selectedFacility).subscribe(resFacilityServices => this.facilityServices = resFacilityServices);

    }
    this.newSelectedFacilityEvent.emit(this.selectedFacility);
  }

  onUpdateFacilityEvent(facility: Facilities) {
    if(this.isEmbedded == true) {
      this.facilitiesService.updateFacilities(facility).subscribe(resFacilities => this.facilities = resFacilities);
    }
  }

  onDeleteFacilityEvent(facility: Facilities) {
    if(this.isEmbedded == true) {
      this.facilitiesService.deleteFacilities(facility).subscribe(() => {});
      this.facilities.splice(this.facilities.indexOf(facility), 1);
      this.selectedFacility = null;
    }
  }

  onCreateFacility() {
    if(this.isEmbedded == true) {
      this.hideNewFacility = !this.hideNewFacility;
    }
  }

  onSubmitNewFacility(facility: Facilities) {
    facility.facilitiesId = "facilitiesId" + facility.facilitiesName +   Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString();
    if(this.isEmbedded == true) {
      this.facilitiesService.createFacilities(facility).subscribe(resFacilities => this.facilities = resFacilities);
      this.hideNewFacility = !this.hideNewFacility;
      this.selectedFacility = facility;
      this.facilities.push(facility);
    }
  }

  onDirectorsVisibility() {
    this.visibilityStatusDirectors = !this.visibilityStatusDirectors;
  }

  onFacilityServiceVisibility() {
    this.visibilityStatusFacilityService = !this.visibilityStatusFacilityService;
  }
}
