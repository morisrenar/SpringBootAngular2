import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Officers} from "../../../model/genericModel/officers";

@Component({
  selector: 'app-officers-list',
  templateUrl: './officers-list.component.html',
  styleUrls: ['./officers-list.component.css']
})
export class OfficersListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("officers")
  officers: Array<Officers>;

  ngOnInit() {
  }

  onSelect(genericObject: Officers) {
    this.selectedGenericObject.emit(genericObject);
  }

}
