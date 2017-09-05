import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FacilityService} from "../../../model/genericModel/facility-service";

@Component({
  selector: 'app-facility-service-details',
  templateUrl: './facility-service-details.component.html',
  styleUrls: ['./facility-service-details.component.css']
})
export class FacilityServiceDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("facilityService")
  public facilityService: FacilityService;

  @Output("updatedFacilityServiceEvent")
  private updatedFacilityServiceEvent = new EventEmitter();
  @Output("deletedFacilityServiceEvent")
  private deletedFacilityServiceEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.isEditMode = false;
    console.log("Facility Services Info: " + JSON.stringify(this.facilityService));
  }

  onUpdateFacilityService() {
    this.isEditMode = !this.isEditMode;
    this.updatedFacilityServiceEvent.emit(this.facilityService);
  }

  onDeleteFacilityService() {
    this.isEditMode = !this.isEditMode;
    this.deletedFacilityServiceEvent.emit(this.facilityService);
  }

  onEditFacilityService() {
    this.isEditMode = !this.isEditMode;
  }

}
