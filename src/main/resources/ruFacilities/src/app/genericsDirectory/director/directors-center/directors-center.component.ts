import {Component, Input, OnInit} from '@angular/core';
import {Directors} from "../../../model/directors";
import {DirectorsService} from "../../../service/directors.service";
import {Facilities} from "../../../model/facilities";

@Component({
  selector: 'app-directors-center',
  templateUrl: './directors-center.component.html',
  styleUrls: ['./directors-center.component.css']
})
export class DirectorsCenterComponent implements OnInit {

  selectedDirectors: Directors;
  private hideNewDirectors: boolean = true;

  private isEmbedded: boolean;

  @Input("directors")
  directors: Array<Directors> = [];
  @Input("facility")
  public facility: Facilities;

  constructor(private directorsService: DirectorsService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectDirectors(directors: Directors) {
    this.selectedDirectors = directors;
  }

  onUpdateDirectorsEvent(directors: Directors) {
    if(this.isEmbedded == true) {
      this.directorsService.updateGenericObjects(this.facility, directors).subscribe(resDirectors => this.directors = resDirectors);
    }
  }

  onDeleteDirectorsEvent(directors: Directors) {
    if(this.isEmbedded) {
      this.directorsService.deleteGenericObjects(this.facility, directors).subscribe(() => {});
      this.directors.splice(this.directors.indexOf(directors), 1);
      this.selectedDirectors = null;
    }
  }

  onCreateDirectors() {
    this.hideNewDirectors = !this.hideNewDirectors;
  }

  onSubmitNewDirectors(directors: Directors) {
    directors.facilitiesDirectorsId = this.facility.facilitiesName + "DirectorsId" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.directorsService.createGenericObjects(this.facility, directors).subscribe(resDirectors => this.directors = resDirectors);
      this.hideNewDirectors = !this.hideNewDirectors;
      this.selectedDirectors = directors;
      this.directors.push(directors);
    }
  }
}
