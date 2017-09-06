import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdmissionHelpline} from "../../../model/ictcenter/admission-helpline";

@Component({
  selector: 'app-admission-helpline-details',
  templateUrl: './admission-helpline-details.component.html',
  styleUrls: ['./admission-helpline-details.component.css']
})
export class AdmissionHelplineDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("admissionHelpline")
  public admissionHelpline: AdmissionHelpline;

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
    this.updatedGenericObjectEvent.emit(this.admissionHelpline);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.admissionHelpline);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
