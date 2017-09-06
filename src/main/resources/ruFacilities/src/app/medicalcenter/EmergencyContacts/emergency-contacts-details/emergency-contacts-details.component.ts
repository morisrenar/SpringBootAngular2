import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmergencyContacts} from "../../../model/medicalcenter/emergency-contacts";

@Component({
  selector: 'app-emergency-contacts-details',
  templateUrl: './emergency-contacts-details.component.html',
  styleUrls: ['./emergency-contacts-details.component.css']
})
export class EmergencyContactsDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("emergencyContacts")
  public emergencyContacts: EmergencyContacts;

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
    this.updatedGenericObjectEvent.emit(this.emergencyContacts);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.emergencyContacts);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
