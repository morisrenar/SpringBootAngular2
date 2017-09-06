import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Medicine} from "../../../model/medicalcenter/medicine";

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("medicine")
  medicine: Array<Medicine>;

  ngOnInit() {
  }

  onSelect(genericObject: Medicine) {
    this.selectedGenericObject.emit(genericObject);
  }

}
