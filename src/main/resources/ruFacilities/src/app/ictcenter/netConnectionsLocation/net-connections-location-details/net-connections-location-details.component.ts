import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NetConnectionsLocation} from "../../../model/ictcenter/net-connections-location";

@Component({
  selector: 'app-net-connections-location-details',
  templateUrl: './net-connections-location-details.component.html',
  styleUrls: ['./net-connections-location-details.component.css']
})
export class NetConnectionsLocationDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("netConnectionsLocation")
  public netConnectionsLocation: NetConnectionsLocation;

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
    this.updatedGenericObjectEvent.emit(this.netConnectionsLocation);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.netConnectionsLocation);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
