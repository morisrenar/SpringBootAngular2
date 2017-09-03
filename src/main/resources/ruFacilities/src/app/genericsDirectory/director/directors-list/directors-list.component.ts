import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Directors} from "../../../model/directors";

@Component({
  selector: 'app-directors-list',
  templateUrl: './directors-list.component.html',
  styleUrls: ['./directors-list.component.css']
})
export class DirectorsListComponent implements OnInit {

  @Output("selectedDirectors")
  public selectedDirectors = new EventEmitter();

  constructor() { }

  @Input("directors")
  directors: Array<Directors>;

  ngOnInit() {
  }

  onSelect(directors: Directors) {
    this.selectedDirectors.emit(directors);
  }

}
