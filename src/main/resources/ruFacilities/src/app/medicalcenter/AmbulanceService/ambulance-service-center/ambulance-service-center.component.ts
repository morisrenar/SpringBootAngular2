import {Component, Input, OnInit} from '@angular/core';
import {AmbulanceService} from "../../../model/medicalcenter/ambulance-service";
import {Facilities} from "../../../model/facilities";
import {AmbulanceServiceService} from "../../../service/medicalcenter/ambulance-service.service";

@Component({
  selector: 'app-ambulance-service-center',
  templateUrl: './ambulance-service-center.component.html',
  styleUrls: ['./ambulance-service-center.component.css']
})
export class AmbulanceServiceCenterComponent implements OnInit {

  @Input("ambulanceService")
  ambulanceService: Array<AmbulanceService> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: AmbulanceService;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: AmbulanceServiceService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: AmbulanceService) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: AmbulanceService) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject);
    }
  }

  onDeleteGenericObjectEvent(genericObject: AmbulanceService) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject);
      this.ambulanceService.splice(this.ambulanceService.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: AmbulanceService) {
    genericObject.facilitiesAmbulanceServiceId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject);
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.ambulanceService.push(genericObject);
    }
  }

}
