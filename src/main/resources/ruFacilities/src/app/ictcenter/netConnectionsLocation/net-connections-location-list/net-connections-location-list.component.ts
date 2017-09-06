import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NetConnectionsLocation} from "../../../model/ictcenter/net-connections-location";

@Component({
  selector: 'app-net-connections-location-list',
  templateUrl: './net-connections-location-list.component.html',
  styleUrls: ['./net-connections-location-list.component.css']
})
export class NetConnectionsLocationListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("netConnectionsLocation")
  netConnectionsLocation: Array<NetConnectionsLocation>;

  ngOnInit() {
  }

  onSelect(genericObject: NetConnectionsLocation) {
    this.selectedGenericObject.emit(genericObject);
  }

}
