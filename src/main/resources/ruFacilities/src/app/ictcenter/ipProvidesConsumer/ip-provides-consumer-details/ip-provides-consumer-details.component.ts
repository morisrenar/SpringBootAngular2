import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IpProvidesConsumer} from "../../../model/ictcenter/ip-provides-consumer";

@Component({
  selector: 'app-ip-provides-consumer-details',
  templateUrl: './ip-provides-consumer-details.component.html',
  styleUrls: ['./ip-provides-consumer-details.component.css']
})
export class IpProvidesConsumerDetailsComponent implements OnInit {

  isEditMode: boolean;

  @Input("ipProvidesConsumer")
  public ipProvidesConsumer: IpProvidesConsumer;

  @Output("updatedGenericObjectEvent")
  private updatedGenericObjectEvent = new EventEmitter();
  @Output("deletedGenericObjectEvent")
  private deletedGenericObjectEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.isEditMode = false;
  }

  onUpdateGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.updatedGenericObjectEvent.emit(this.ipProvidesConsumer);
  }

  onDeleteGenericObject() {
    this.isEditMode = !this.isEditMode;
    this.deletedGenericObjectEvent.emit(this.ipProvidesConsumer);
  }

  onEditGenericObject() {
    this.isEditMode = !this.isEditMode;
  }

}
