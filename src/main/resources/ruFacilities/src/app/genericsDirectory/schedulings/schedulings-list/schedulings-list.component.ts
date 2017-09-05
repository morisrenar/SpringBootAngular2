import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedulings} from "../../../model/genericModel/schedulings";

@Component({
  selector: 'app-schedulings-list',
  templateUrl: './schedulings-list.component.html',
  styleUrls: ['./schedulings-list.component.css']
})
export class SchedulingsListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("schedulings")
  schedulings: Array<Schedulings>;

  ngOnInit() {
  }

  onSelect(genericObject: Schedulings) {
    this.selectedGenericObject.emit(genericObject);
  }

}
