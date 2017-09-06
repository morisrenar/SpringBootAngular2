import {Component, Input, OnInit} from '@angular/core';
import {IpProvidesConsumer} from "../../../model/ictcenter/ip-provides-consumer";
import {Facilities} from "../../../model/facilities";
import {IpProvidesConsumerService} from "../../../service/ictcenter/ip-provides-consumer.service";

@Component({
  selector: 'app-ip-provides-consumer-center',
  templateUrl: './ip-provides-consumer-center.component.html',
  styleUrls: ['./ip-provides-consumer-center.component.css']
})
export class IpProvidesConsumerCenterComponent implements OnInit {

  @Input("ipProvidesConsumer")
  ipProvidesConsumer: Array<IpProvidesConsumer> = [];
  @Input("facility")
  public facility: Facilities;

  selectedGenericObject: IpProvidesConsumer;
  private hideNewGenericObject: boolean = true;
  private isEmbedded: boolean;

  constructor(private genericObjectService: IpProvidesConsumerService) {
    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
  }

  ngOnInit() {
  }

  onSelectGenericObjectEvent(genericObject: IpProvidesConsumer) {
    this.selectedGenericObject = genericObject;
  }

  onUpdateGenericObjectEvent(genericObject: IpProvidesConsumer) {
    if(this.isEmbedded == true) {
      this.genericObjectService.updateGenericObjects(this.facility, genericObject);
    }
  }

  onDeleteGenericObjectEvent(genericObject: IpProvidesConsumer) {
    if(this.isEmbedded) {
      this.genericObjectService.deleteGenericObjects(this.facility, genericObject);
      this.ipProvidesConsumer.splice(this.ipProvidesConsumer.indexOf(genericObject), 1);
      this.selectedGenericObject = null;
    }
  }

  onCreateGenericObjectEvent() {
    this.hideNewGenericObject = !this.hideNewGenericObject;
  }

  onSubmitNewGenericObject(genericObject: IpProvidesConsumer) {
    genericObject.facilitiesIdProvidesConsumersId = this.facility.facilitiesName + "Id" + Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString()
    if(this.isEmbedded == true) {
      this.genericObjectService.createGenericObjects(this.facility, genericObject);
      this.hideNewGenericObject = !this.hideNewGenericObject;
      this.selectedGenericObject = genericObject;
      this.ipProvidesConsumer.push(genericObject);
    }
  }

}
