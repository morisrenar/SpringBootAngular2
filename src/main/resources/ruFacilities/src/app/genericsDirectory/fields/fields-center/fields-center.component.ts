import {Component, Input, OnInit} from '@angular/core';
import {Fields} from "../../../model/fields";
import {Facilities} from "../../../model/facilities";

@Component({
  selector: 'app-fields-center',
  templateUrl: './fields-center.component.html',
  styleUrls: ['./fields-center.component.css']
})
export class FieldsCenterComponent implements OnInit {

  @Input("fields")
  fields: Array<Fields> = [];
  @Input("facility")
  public facility: Facilities;

  constructor() { }

  ngOnInit() {
  }

}
