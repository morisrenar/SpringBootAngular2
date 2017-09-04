import {Component, Input, OnInit} from '@angular/core';
import {Stuffs} from "../../../model/stuffs";
import {Facilities} from "../../../model/facilities";

@Component({
  selector: 'app-stuffs-center',
  templateUrl: './stuffs-center.component.html',
  styleUrls: ['./stuffs-center.component.css']
})
export class StuffsCenterComponent implements OnInit {

  @Input("stuffs")
  stuffs: Array<Stuffs> = [];
  @Input("facility")
  public facility: Facilities;

  constructor() { }

  ngOnInit() {
  }

}
