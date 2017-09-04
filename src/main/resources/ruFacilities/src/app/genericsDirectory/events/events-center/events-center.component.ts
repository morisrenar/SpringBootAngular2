import {Component, Input, OnInit} from '@angular/core';
import {Facilities} from "../../../model/facilities";
import {Events} from "../../../model/events";

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

  constructor() { }

  ngOnInit() {
  }

}
