import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Medicine} from "../../../model/medicalcenter/medicine";

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("medicine")
  public medicine: Medicine;

  @Output("updatedGenericObjectEvent")
  private updatedGenericObjectEvent = new EventEmitter();
  @Output("deletedGenericObjectEvent")
  private deletedGenericObjectEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.isEditMode = false;
  }

  onUpdateGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.updatedGenericObjectEvent.emit(this.medicine);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.medicine);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
