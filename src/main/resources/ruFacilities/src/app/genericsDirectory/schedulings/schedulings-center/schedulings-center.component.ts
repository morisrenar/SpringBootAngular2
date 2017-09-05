import {Component, Input, OnInit} from '@angular/core';
import {Schedulings} from "../../../model/genericModel/schedulings";
import {Facilities} from "../../../model/facilities";
import {SchedulingsService} from "../../../service/genericService/schedulings.service";

@Component({
  selector: 'app-schedulings-center',
  templateUrl: './schedulings-center.component.html',
  styleUrls: ['./schedulings-center.component.css']
})
export class SchedulingsCenterComponent implements OnInit {

  @Input("schedulings")
  schedulings: Array<Schedulings> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: Schedulings;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: SchedulingsService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: Schedulings) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: Schedulings) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.schedulings = resGenericObject);
    }
  }

  onDeleteGenericObjectEvent(genericObject: Schedulings) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject).subscribe(() => {});
      this.schedulings.splice(this.schedulings.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: Schedulings) {
    genericObject.facilitiesSchedulingsId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.schedulings = resGenericObject);
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.schedulings.push(genericObject);
    }
  }

}
