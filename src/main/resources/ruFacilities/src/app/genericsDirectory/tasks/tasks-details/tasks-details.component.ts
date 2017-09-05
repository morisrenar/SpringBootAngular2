import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Tasks} from "../../../model/genericModel/tasks";

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.css']
})
export class TasksDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("tasks")
  public tasks: Tasks;

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
    this.updatedGenericObjectEvent.emit(this.tasks);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.tasks);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
