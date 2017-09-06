import {Component, Input, OnInit} from '@angular/core';
import {AdmissionHelpline} from "../../../model/ictcenter/admission-helpline";
import {Facilities} from "../../../model/facilities";
import {AdmissionHelplineService} from "../../../service/ictcenter/admission-helpline.service";

@Component({
  selector: 'app-admission-helpline-center',
  templateUrl: './admission-helpline-center.component.html',
  styleUrls: ['./admission-helpline-center.component.css']
})
export class AdmissionHelplineCenterComponent implements OnInit {

  @Input("admissionHelpline")
  admissionHelpline: Array<AdmissionHelpline> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: AdmissionHelpline;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: AdmissionHelplineService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: AdmissionHelpline) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: AdmissionHelpline) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject);
    }
  }

  onDeleteGenericObjectEvent(genericObject: AdmissionHelpline) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject);
      this.admissionHelpline.splice(this.admissionHelpline.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: AdmissionHelpline) {
    genericObject.facilitiesAdmissionHelplineId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject);
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.admissionHelpline.push(genericObject);
    }
  }

}
