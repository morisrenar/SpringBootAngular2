import {Component, Input, OnInit} from '@angular/core';
import {Schedulings} from "../../../model/schedulings";
import {Facilities} from "../../../model/facilities";

@Component({
  selector: 'app-schedulings-center',
  templateUrl: './schedulings-center.component.html',
  styleUrls: ['./schedulings-center.component.css']
})
export class SchedulingsCenterComponent implements OnInit {

  @Input("schedulings")
  schedulings: Array<Schedulings> = [];
  @Input("facility")
  public facility: Facilities;

  constructor() { }

  ngOnInit() {
  }

}
