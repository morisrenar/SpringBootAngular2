import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedulings} from "../../../model/schedulings";

@Component({
  selector: 'app-schedulings-details',
  templateUrl: './schedulings-details.component.html',
  styleUrls: ['./schedulings-details.component.css']
})
export class SchedulingsDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("schedulings")
  public schedulings: Schedulings;

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
    this.updatedGenericObjectEvent.emit(this.schedulings);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.schedulings);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
