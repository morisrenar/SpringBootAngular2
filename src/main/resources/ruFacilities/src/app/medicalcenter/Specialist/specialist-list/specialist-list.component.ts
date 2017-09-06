import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Specialist} from "../../../model/medicalcenter/specialist";

@Component({
  selector: 'app-specialist-list',
  templateUrl: './specialist-list.component.html',
  styleUrls: ['./specialist-list.component.css']
})
export class SpecialistListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("specialist")
  specialist: Array<Specialist>;

  ngOnInit() {
  }

  onSelect(genericObject: Specialist) {
    this.selectedGenericObject.emit(genericObject);
  }

}
