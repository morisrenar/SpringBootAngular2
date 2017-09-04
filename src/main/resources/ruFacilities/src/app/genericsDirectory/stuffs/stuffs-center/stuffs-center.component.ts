import {Component, Input, OnInit} from '@angular/core';
import {Stuffs} from "../../../model/stuffs";
import {Facilities} from "../../../model/facilities";
import {StuffsService} from "../../../service/stuffs.service";

@Component({
  selector: 'app-stuffs-center',
  templateUrl: './stuffs-center.component.html',
  styleUrls: ['./stuffs-center.component.css']
})
export class StuffsCenterComponent implements OnInit {

  @Input("stuffs")
  stuffs: Array<Stuffs> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: Stuffs;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: StuffsService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: Stuffs) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: Stuffs) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.stuffs = resGenericObject);
    }
  }

  onDeleteGenericObjectEvent(genericObject: Stuffs) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject).subscribe(() => {});
      this.stuffs.splice(this.stuffs.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: Stuffs) {
    genericObject.facilitiesStuffsId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.stuffs = resGenericObject);
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.stuffs.push(genericObject);
    }
  }

}
