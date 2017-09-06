import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TransportationInfo} from "../../../model/transportation/transportation-info";

@Component({
  selector: 'app-transportation-info-list',
  templateUrl: './transportation-info-list.component.html',
  styleUrls: ['./transportation-info-list.component.css']
})
export class TransportationInfoListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("transportationInfo")
  transportationInfo: Array<TransportationInfo>;

  ngOnInit() {
  }

  onSelect(genericObject: TransportationInfo) {
    this.selectedGenericObject.emit(genericObject);
  }

}
