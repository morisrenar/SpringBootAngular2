import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AmbulanceService} from "../../../model/medicalcenter/ambulance-service";

@Component({
  selector: 'app-ambulance-service-details',
  templateUrl: './ambulance-service-details.component.html',
  styleUrls: ['./ambulance-service-details.component.css']
})
export class AmbulanceServiceDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("ambulanceService")
  public ambulanceService: AmbulanceService;

  @Output("updatedGenericObjectEvent")
  private updatedGenericObjectEvent = new EventEmitter();
  @Output("deletedGenericObjectEvent")
  private deletedGenericObjectEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.isEditMode = false;
  }

  onUpdateGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.updatedGenericObjectEvent.emit(this.ambulanceService);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.ambulanceService);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
