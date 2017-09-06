import {Component, Input, OnInit} from '@angular/core';
import {Courses} from "../../../model/ictcenter/courses";
import {Facilities} from "../../../model/facilities";
import {CoursesService} from "../../../service/ictcenter/courses.service";

@Component({
  selector: 'app-courses-center',
  templateUrl: './courses-center.component.html',
  styleUrls: ['./courses-center.component.css']
})
export class CoursesCenterComponent implements OnInit {

  @Input("courses")
  courses: Array<Courses> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: Courses;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: CoursesService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: Courses) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: Courses) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject).subscribe();
    }
  }

  onDeleteGenericObjectEvent(genericObject: Courses) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject).subscribe();
      this.courses.splice(this.courses.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: Courses) {
    genericObject.facilitiesCoursesID = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject).subscribe();
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.courses.push(genericObject);
      console.log("Creating new course in center component");
    }
  }

}
