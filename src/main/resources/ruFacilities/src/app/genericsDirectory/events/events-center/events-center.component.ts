import {Component, Input, OnInit} from '@angular/core';
import {Facilities} from "../../../model/facilities";
import {Events} from "../../../model/events";
import {EventsService} from "../../../service/events.service";

@Component({
  selector: 'app-events-center',
  templateUrl: './events-center.component.html',
  styleUrls: ['./events-center.component.css']
})
export class EventsCenterComponent implements OnInit {

  @Input("events")
  events: Array<Events> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: Events;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: EventsService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
    console.log("Events are: " + JSON.stringify(this.events));
  }

  onSelectGenericObjectEvent(genericObject: Events) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: Events) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.events = resGenericObject);
    }
  }

  onDeleteGenericObjectEvent(genericObject: Events) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject).subscribe(() => {});
      this.events.splice(this.events.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: Events) {
    genericObject.facilitiesEventsId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject).subscribe(resGenericObject => this.events = resGenericObject);
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.events.push(genericObject);
    }
  }

}
