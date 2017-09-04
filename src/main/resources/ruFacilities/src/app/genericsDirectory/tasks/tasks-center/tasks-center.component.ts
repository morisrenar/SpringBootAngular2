import {Component, Input, OnInit} from '@angular/core';
import {Tasks} from "../../../model/tasks";
import {Facilities} from "../../../model/facilities";

@Component({
  selector: 'app-tasks-center',
  templateUrl: './tasks-center.component.html',
  styleUrls: ['./tasks-center.component.css']
})
export class TasksCenterComponent implements OnInit {

  @Input("tasks")
  tasks: Array<Tasks> = [];
  @Input("facility")
  public facility: Facilities;

  constructor() { }

  ngOnInit() {
  }

}
