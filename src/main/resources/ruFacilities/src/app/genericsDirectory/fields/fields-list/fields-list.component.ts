import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fields} from "../../../model/fields";

@Component({
  selector: 'app-fields-list',
  templateUrl: './fields-list.component.html',
  styleUrls: ['./fields-list.component.css']
})
export class FieldsListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("fields")
  fields: Array<Fields>;

  ngOnInit() {
  }

  onSelect(genericObject: Fields) {
    this.selectedGenericObject.emit(genericObject);
  }

}
