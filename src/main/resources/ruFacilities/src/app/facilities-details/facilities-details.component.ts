import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facilities} from "../model/facilities";

@Component({
  selector: 'app-facilities-details',
  templateUrl: './facilities-details.component.html',
  styleUrls: ['./facilities-details.component.css']
})
export class FacilitiesDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("facility")
  public facility: Facilities;

  @Output("updatedFacilityEvent")
  private updatedFacilityEvent = new EventEmitter();
  @Output("deletedFacilityEvent")
  private deletedFacilityEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.isEditMode = false;
    localStorage.setItem('currentFacility', JSON.stringify(this.facility));
  }

  onUpdateFacility() {
    this.isEditMode = !this.isEditMode;
    this.updatedFacilityEvent.emit(this.facility);
  }

  onDeleteFacility() {
    this.isEditMode = !this.isEditMode;
    this.deletedFacilityEvent.emit(this.facility);
  }

  onEditFacility() {
    this.isEditMode = !this.isEditMode;
  }

}
