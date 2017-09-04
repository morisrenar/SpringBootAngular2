import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Events} from "../../../model/events";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("events")
  events: Array<Events>;

  ngOnInit() {
  }

  onSelect(genericObject: Events) {
    this.selectedGenericObject.emit(genericObject);
  }
}
