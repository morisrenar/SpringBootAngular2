import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmergencyContacts} from "../../../model/medicalcenter/emergency-contacts";

@Component({
  selector: 'app-emergency-contacts-list',
  templateUrl: './emergency-contacts-list.component.html',
  styleUrls: ['./emergency-contacts-list.component.css']
})
export class EmergencyContactsListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("emergencyContacts")
  emergencyContacts: Array<EmergencyContacts>;

  ngOnInit() {
  }

  onSelect(genericObject: EmergencyContacts) {
    this.selectedGenericObject.emit(genericObject);
  }

}
