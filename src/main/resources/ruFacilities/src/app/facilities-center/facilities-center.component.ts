import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Facilities} from "../model/facilities";
import {FacilitiesService} from "../service/facilities.service";
import {Directors} from "../model/directors";
import {DirectorsService} from "../service/directors.service";
import {FacilityServiceService} from "../service/facility-service.service";
import {FacilityService} from "../model/facility-service";
import {Events} from "../model/events";
import {Fields} from "../model/fields";
import {Officers} from "../model/officers";
import {Schedulings} from "../model/schedulings";
import {Stuffs} from "../model/stuffs";
import {Tasks} from "../model/tasks";
import {EventsService} from "../service/events.service";
import {FieldsService} from "../service/fields.service";
import {OfficersService} from "../service/officers.service";
import {SchedulingsService} from "../service/schedulings.service";
import {StuffsService} from "../service/stuffs.service";
import {TasksService} from "../service/tasks.service";

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
  events: Array<Events> = [];
  fields: Array<Fields> = [];
  officers: Array<Officers> = [];
  schedulings: Array<Schedulings> = [];
  stuffs: Array<Stuffs> = [];
  tasks: Array<Tasks> = [];

  constructor(private facilitiesService: FacilitiesService,
              private directorsService: DirectorsService,
              private facilityServiceService: FacilityServiceService,
              private eventsService: EventsService,
              private fieldsService: FieldsService,
              private officersService: OfficersService,
              private schedulingsService: SchedulingsService,
              private stuffsService: StuffsService,
              private tasksService: TasksService) {

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
      this.events = [];
      this.fields = [];
      this.officers = [];
      this.schedulings = [];
      this.stuffs = [];
      this.tasks = [];
    } else {
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
      this.directorsService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.directors = resGenericObjects);
      this.eventsService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.events = resGenericObjects);
      this.facilityServiceService.getFacilityService(this.selectedFacility).subscribe(resFacilityServices => this.facilityServices = resFacilityServices);
      this.fieldsService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.fields = resGenericObjects);
      this.officersService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.officers = resGenericObjects);
      this.schedulingsService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.schedulings = resGenericObjects);
      this.stuffsService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.stuffs = resGenericObjects);
      this.tasksService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.tasks = resGenericObjects);
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

  onEventsVisibility() {
    this.visibilityStatusEvents = !this.visibilityStatusEvents;
  }

  onFacilityServiceVisibility() {
    this.visibilityStatusFacilityService = !this.visibilityStatusFacilityService;
  }

  onFieldsVisibility() {
    this.visibilityStatusFields = !this.visibilityStatusFields;
  }

  onOfficersVisibility() {
    this.visibilityStatusOfficers = !this.visibilityStatusOfficers;
  }

  onSchedulingsVisibility() {
    this.visibilityStatusSchedulings = !this.visibilityStatusSchedulings;
  }

  onStuffsVisibility() {
    this.visibilityStatusStuffs = !this.visibilityStatusStuffs;
  }

  onTasksVisibility() {
    this.visibilityStatusTasks = !this.visibilityStatusTasks;
  }
}
