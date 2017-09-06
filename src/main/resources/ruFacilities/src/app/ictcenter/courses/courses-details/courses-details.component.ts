import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Courses} from "../../../model/ictcenter/courses";

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("courses")
  public courses: Courses;

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
    this.updatedGenericObjectEvent.emit(this.courses);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.courses);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
