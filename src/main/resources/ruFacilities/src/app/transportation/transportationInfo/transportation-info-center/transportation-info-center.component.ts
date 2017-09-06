import {Component, Input, OnInit} from '@angular/core';
import {TransportationInfo} from "../../../model/transportation/transportation-info";
import {Facilities} from "../../../model/facilities";
import {TransportationInfoService} from "../../../service/transportation/transportation-info.service";

@Component({
  selector: 'app-transportation-info-center',
  templateUrl: './transportation-info-center.component.html',
  styleUrls: ['./transportation-info-center.component.css']
})
export class TransportationInfoCenterComponent implements OnInit {

  @Input("transportationInfo")
  transportationInfo: Array<TransportationInfo> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: TransportationInfo;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: TransportationInfoService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: TransportationInfo) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: TransportationInfo) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject).subscribe();
    }
  }

  onDeleteGenericObjectEvent(genericObject: TransportationInfo) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject).subscribe();
      this.transportationInfo.splice(this.transportationInfo.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: TransportationInfo) {
    genericObject.facilitiesTransportationInfoId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject).subscribe();
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.transportationInfo.push(genericObject);
    }
  }

}
