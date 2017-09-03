import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Directors} from "../../../model/directors";

@Component({
  selector: 'app-directors-details',
  templateUrl: './directors-details.component.html',
  styleUrls: ['./directors-details.component.css']
})
export class DirectorsDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("directors")
  public directors: Directors;

  @Output("updatedDirectorsEvent")
  private updatedDirectorsEvent = new EventEmitter();
  @Output("deletedDirectorsEvent")
  private deletedDirectorsEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.isEditMode = false;
  }

  onUpdateDirectors() {
    this.isEditMode = !this.isEditMode;
    this.updatedDirectorsEvent.emit(this.directors);
  }

  onDeleteDirectors() {
    this.isEditMode = !this.isEditMode;
    this.deletedDirectorsEvent.emit(this.directors);
  }

  onEditDirectors() {
    this.isEditMode = !this.isEditMode;
  }

}
