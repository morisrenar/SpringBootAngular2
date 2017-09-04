import {Component, Input, OnInit} from '@angular/core';
import {Fields} from "../../../model/fields";
import {Facilities} from "../../../model/facilities";
import {FieldsService} from "../../../service/fields.service";

@Component({
  selector: 'app-fields-center',
  templateUrl: './fields-center.component.html',
  styleUrls: ['./fields-center.component.css']
})
export class FieldsCenterComponent implements OnInit {

  @Input("fields")
  fields: Array<Fields> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject:Fields;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: FieldsService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: Fields) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: Fields) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.fields = resGenericObject);
    }
  }

  onDeleteGenericObjectEvent(genericObject: Fields) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject).subscribe(() => {});
      this.fields.splice(this.fields.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: Fields) {
    genericObject.facilitiesFieldsId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.fields = resGenericObject);
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.fields.push(genericObject);
    }
  }

}
