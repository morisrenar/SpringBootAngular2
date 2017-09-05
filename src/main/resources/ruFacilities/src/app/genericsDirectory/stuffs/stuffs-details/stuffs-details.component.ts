import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stuffs} from "../../../model/genericModel/stuffs";

@Component({
  selector: 'app-stuffs-details',
  templateUrl: './stuffs-details.component.html',
  styleUrls: ['./stuffs-details.component.css']
})
export class StuffsDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("stuffs")
  public stuffs: Stuffs;

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
    this.updatedGenericObjectEvent.emit(this.stuffs);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.stuffs);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
