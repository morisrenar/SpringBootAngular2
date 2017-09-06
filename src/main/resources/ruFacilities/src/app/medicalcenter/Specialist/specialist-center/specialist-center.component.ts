import {Component, Input, OnInit} from '@angular/core';
import {Specialist} from "../../../model/medicalcenter/specialist";
import {Facilities} from "../../../model/facilities";
import {SpecialistService} from "../../../service/medicalcenter/specialist.service";

@Component({
  selector: 'app-specialist-center',
  templateUrl: './specialist-center.component.html',
  styleUrls: ['./specialist-center.component.css']
})
export class SpecialistCenterComponent implements OnInit {

  @Input("specialist")
  specialist: Array<Specialist> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: Specialist;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: SpecialistService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: Specialist) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: Specialist) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject).subscribe();
    }
  }

  onDeleteGenericObjectEvent(genericObject: Specialist) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject).subscribe();
      this.specialist.splice(this.specialist.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: Specialist) {
    genericObject.medicalCenterSpecialistId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      console.log("Creating the new object: " + JSON.stringify(genericObject));
      this.genericObjectService.createGenericObjects(this.facility, genericObject).subscribe();
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      //this.specialist.push(genericObject);
    }
  }

}
