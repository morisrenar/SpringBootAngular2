import {Component, Input, OnInit} from '@angular/core';
import {Officers} from "../../../model/officers";
import {Facilities} from "../../../model/facilities";

@Component({
  selector: 'app-officers-center',
  templateUrl: './officers-center.component.html',
  styleUrls: ['./officers-center.component.css']
})
export class OfficersCenterComponent implements OnInit {

  @Input("officers")
  officers: Array<Officers> = [];
  @Input("facility")
  public facility: Facilities;

  constructor() { }

  ngOnInit() {
  }

}
