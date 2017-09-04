import {Component, Input, OnInit} from '@angular/core';
import {Officers} from "../../../model/officers";
import {Facilities} from "../../../model/facilities";
import {OfficersService} from "../../../service/officers.service";

@Component({
  selector: 'app-officers-center',
  templateUrl: './officers-center.component.html',
  styleUrls: ['./officers-center.component.css']
})
export class OfficersCenterComponent implements OnInit {

  @Input("officers")
  officers: Array<Officers> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: Officers;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: OfficersService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: Officers) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: Officers) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.officers = resGenericObject);
    }
  }

  onDeleteGenericObjectEvent(genericObject: Officers) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject).subscribe(() => {});
      this.officers.splice(this.officers.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: Officers) {
    genericObject.facilitiesOfficersId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.officers = resGenericObject);
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.officers.push(genericObject);
    }
  }

}
