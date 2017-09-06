import {Component, Input, OnInit} from '@angular/core';
import {NetConnectionsLocation} from "../../../model/ictcenter/net-connections-location";
import {Facilities} from "../../../model/facilities";
import {NetConnectionsLocationService} from "../../../service/ictcenter/net-connections-location.service";

@Component({
  selector: 'app-net-connections-location-center',
  templateUrl: './net-connections-location-center.component.html',
  styleUrls: ['./net-connections-location-center.component.css']
})
export class NetConnectionsLocationCenterComponent implements OnInit {

  @Input("netConnectionsLocation")
  netConnectionsLocation: Array<NetConnectionsLocation> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: NetConnectionsLocation;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: NetConnectionsLocationService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: NetConnectionsLocation) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: NetConnectionsLocation) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.netConnectionsLocation = resGenericObject);
    }
  }

  onDeleteGenericObjectEvent(genericObject: NetConnectionsLocation) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject).subscribe(() => {});
      this.netConnectionsLocation.splice(this.netConnectionsLocation.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: NetConnectionsLocation) {
    genericObject.facilitiesNetConnectionsLocationId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.netConnectionsLocation = resGenericObject);
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.netConnectionsLocation.push(genericObject);
    }
  }

}
