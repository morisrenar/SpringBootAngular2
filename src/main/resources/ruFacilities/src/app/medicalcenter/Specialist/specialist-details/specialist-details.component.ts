import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Specialist} from "../../../model/medicalcenter/specialist";

@Component({
  selector: 'app-specialist-details',
  templateUrl: './specialist-details.component.html',
  styleUrls: ['./specialist-details.component.css']
})
export class SpecialistDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("specialist")
  public specialist: Specialist;

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
    this.updatedGenericObjectEvent.emit(this.specialist);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.specialist);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
