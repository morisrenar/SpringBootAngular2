import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tasks} from "../../../model/tasks";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("tasks")
  tasks: Array<Tasks>;

  ngOnInit() {
  }

  onSelect(genericObject: Tasks) {
    this.selectedGenericObject.emit(genericObject);
  }

}
