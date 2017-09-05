import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Officers} from "../../../model/officers";

@Component({
  selector: 'app-officers-details',
  templateUrl: './officers-details.component.html',
  styleUrls: ['./officers-details.component.css']
})
export class OfficersDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("officers")
  public officers: Officers;

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
    this.updatedGenericObjectEvent.emit(this.officers);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.officers);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
