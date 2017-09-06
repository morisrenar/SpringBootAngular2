import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Courses} from "../../../model/ictcenter/courses";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("courses")
  courses: Array<Courses>;

  ngOnInit() {
  }

  onSelect(genericObject: Courses) {
    this.selectedGenericObject.emit(genericObject);
  }

}
