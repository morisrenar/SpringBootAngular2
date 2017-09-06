import {Component, Input, OnInit} from '@angular/core';
import {Medicine} from "../../../model/medicalcenter/medicine";
import {Facilities} from "../../../model/facilities";
import {MedicineService} from "../../../service/medicalcenter/medicine.service";

@Component({
  selector: 'app-medicine-center',
  templateUrl: './medicine-center.component.html',
  styleUrls: ['./medicine-center.component.css']
})
export class MedicineCenterComponent implements OnInit {

  @Input("medicine")
  medicine: Array<Medicine> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: Medicine;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: MedicineService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: Medicine) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: Medicine) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject);
    }
  }

  onDeleteGenericObjectEvent(genericObject: Medicine) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject);
      this.medicine.splice(this.medicine.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: Medicine) {
    genericObject.facilitiesMedicineId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject);
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.medicine.push(genericObject);
    }
  }

}
