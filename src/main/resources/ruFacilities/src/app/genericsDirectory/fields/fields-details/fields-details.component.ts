import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fields} from "../../../model/fields";

@Component({
  selector: 'app-fields-details',
  templateUrl: './fields-details.component.html',
  styleUrls: ['./fields-details.component.css']
})
export class FieldsDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("fields")
  public fields: Fields;

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
    this.updatedGenericObjectEvent.emit(this.fields);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.fields);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
