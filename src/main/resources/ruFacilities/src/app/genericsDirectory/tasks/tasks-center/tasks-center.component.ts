import {Component, Input, OnInit} from '@angular/core';
import {Tasks} from "../../../model/genericModel/tasks";
import {Facilities} from "../../../model/facilities";
import {TasksService} from "../../../service/genericService/tasks.service";

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

  selectedGenericObject: Tasks;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: TasksService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: Tasks) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: Tasks) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.tasks = resGenericObject);
    }
  }

  onDeleteGenericObjectEvent(genericObject: Tasks) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject).subscribe(() => {});
      this.tasks.splice(this.tasks.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: Tasks) {
    genericObject.facilitiesTasksId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.tasks = resGenericObject);
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.tasks.push(genericObject);
    }
  }

}
