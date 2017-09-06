import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IpProvidesConsumer} from "../../../model/ictcenter/ip-provides-consumer";

@Component({
  selector: 'app-ip-provides-consumer-list',
  templateUrl: './ip-provides-consumer-list.component.html',
  styleUrls: ['./ip-provides-consumer-list.component.css']
})
export class IpProvidesConsumerListComponent implements OnInit {

  @Output("selectedGenericObject")
  public selectedGenericObject = new EventEmitter();

  constructor() { }

  @Input("ipProvidesConsumer")
  ipProvidesConsumer: Array<IpProvidesConsumer>;

  ngOnInit() {
  }

  onSelect(genericObject: IpProvidesConsumer) {
    this.selectedGenericObject.emit(genericObject);
  }

}
