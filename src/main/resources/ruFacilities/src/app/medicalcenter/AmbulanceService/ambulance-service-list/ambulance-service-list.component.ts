import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AmbulanceServiceService} from "../../../service/medicalcenter/ambulance-service.service";
import {AmbulanceService} from "../../../model/medicalcenter/ambulance-service";

@Component({
  selector: 'app-ambulance-service-list',
  templateUrl: './ambulance-service-list.component.html',
  styleUrls: ['./ambulance-service-list.component.css']
})
export class AmbulanceServiceListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("ambulanceService")
  ambulanceService: Array<AmbulanceService>;

  ngOnInit() {
  }

  onSelect(genericObject: AmbulanceService) {
    this.selectedGenericObject.emit(genericObject);
  }

}
