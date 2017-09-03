import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FacilityService} from "../../../model/facility-service";

@Component({
  selector: 'app-facility-service-list',
  templateUrl: './facility-service-list.component.html',
  styleUrls: ['./facility-service-list.component.css']
})
export class FacilityServiceListComponent implements OnInit {

  @Output("selectedFacilityService")
  public selectedFacilityService = new EventEmitter();

  constructor() { }

  @Input("facilityServices")
  facilityServices: Array<FacilityService>;

  ngOnInit() {
  }

  onSelect(facilityService: FacilityService) {
    this.selectedFacilityService.emit(facilityService);
  }

}
