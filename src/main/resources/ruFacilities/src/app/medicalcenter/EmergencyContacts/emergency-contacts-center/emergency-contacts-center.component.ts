import {Component, Input, OnInit} from '@angular/core';
import {EmergencyContacts} from "../../../model/medicalcenter/emergency-contacts";
import {Facilities} from "../../../model/facilities";
import {EmergencyContactsService} from "../../../service/medicalcenter/emergency-contacts.service";

@Component({
  selector: 'app-emergency-contacts-center',
  templateUrl: './emergency-contacts-center.component.html',
  styleUrls: ['./emergency-contacts-center.component.css']
})
export class EmergencyContactsCenterComponent implements OnInit {

  @Input("emergencyContacts")
  emergencyContacts: Array<EmergencyContacts> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: EmergencyContacts;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: EmergencyContactsService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: EmergencyContacts) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: EmergencyContacts) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject);
    }
  }

  onDeleteGenericObjectEvent(genericObject: EmergencyContacts) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject);
      this.emergencyContacts.splice(this.emergencyContacts.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: EmergencyContacts) {
    genericObject.medicalCenterEmergencyContactId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject);
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.emergencyContacts.push(genericObject);
    }
  }

}
