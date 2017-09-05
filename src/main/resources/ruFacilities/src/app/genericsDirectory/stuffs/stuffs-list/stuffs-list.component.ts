import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stuffs} from "../../../model/genericModel/stuffs";

@Component({
  selector: 'app-stuffs-list',
  templateUrl: './stuffs-list.component.html',
  styleUrls: ['./stuffs-list.component.css']
})
export class StuffsListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("stuffs")
  stuffs: Array<Stuffs>;

  ngOnInit() {
  }

  onSelect(genericObject: Stuffs) {
    this.selectedGenericObject.emit(genericObject);
  }

}
