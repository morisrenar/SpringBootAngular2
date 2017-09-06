import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdmissionHelpline} from "../../../model/ictcenter/admission-helpline";

@Component({
  selector: 'app-admission-helpline-list',
  templateUrl: './admission-helpline-list.component.html',
  styleUrls: ['./admission-helpline-list.component.css']
})
export class AdmissionHelplineListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("admissionHelpline")
  admissionHelpline: Array<AdmissionHelpline>;

  ngOnInit() {
  }

  onSelect(genericObject: AdmissionHelpline) {
    this.selectedGenericObject.emit(genericObject);
  }

}
