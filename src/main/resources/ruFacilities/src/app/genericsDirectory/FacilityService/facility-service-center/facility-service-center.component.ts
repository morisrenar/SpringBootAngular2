import {Component, Input, OnInit} from '@angular/core';
import {FacilityService} from "../../../model/facility-service";
import {Facilities} from "../../../model/facilities";
import {FacilityServiceService} from "../../../service/facility-service.service";

@Component({
  selector: 'app-facility-service-center',
  templateUrl: './facility-service-center.component.html',
  styleUrls: ['./facility-service-center.component.css']
})
export class FacilityServiceCenterComponent implements OnInit {

  selectedFacilityService: FacilityService;
  private hideNewFacilityService: boolean = true;

  private isEmbedded: boolean;

  @Input("facilityServices")
  facilityServices: Array<FacilityService> = [];
  @Input("facility")
  public facility: Facilities;

  constructor(private facilityServiceService: FacilityServiceService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectFacilityService(facilityService: FacilityService) {
    this.selectedFacilityService = facilityService;
  }

  onUpdateFacilityServiceEvent(facilityService: FacilityService) {
    if(this.isEmbedded == true) {
      this.facilityServiceService.updateFacilityService(this.facility, facilityService).subscribe(() => {});
    }
  }

  onDeleteFacilityServiceEvent(facilityService: FacilityService) {
    if(this.isEmbedded) {
      this.facilityServiceService.deleteFacilityService(this.facility, facilityService).subscribe(() => {});
      this.facilityServices.splice(this.facilityServices.indexOf(facilityService), 1);
      this.selectedFacilityService = null;
    }
  }

  onCreateFacilityService() {
    this.hideNewFacilityService = !this.hideNewFacilityService;
  }

  onSubmitNewFacilityService(facilityService: FacilityService) {
    facilityService.facilityServicesId = this.facility.facilitiesName + "FacilityServiceId" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.facilityServiceService.createFacilityService(this.facility, facilityService).subscribe(() => {});
      this.hideNewFacilityService = !this.hideNewFacilityService;
      this.selectedFacilityService = facilityService;
      this.facilityServices.push(facilityService);
    }
  }
}
