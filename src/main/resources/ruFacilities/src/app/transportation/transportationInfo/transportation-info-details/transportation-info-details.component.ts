import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TransportationInfo} from "../../../model/transportation/transportation-info";

@Component({
  selector: 'app-transportation-info-details',
  templateUrl: './transportation-info-details.component.html',
  styleUrls: ['./transportation-info-details.component.css']
})
export class TransportationInfoDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("transportationInfo")
  public transportationInfo: TransportationInfo;

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
    this.updatedGenericObjectEvent.emit(this.transportationInfo);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.transportationInfo);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
