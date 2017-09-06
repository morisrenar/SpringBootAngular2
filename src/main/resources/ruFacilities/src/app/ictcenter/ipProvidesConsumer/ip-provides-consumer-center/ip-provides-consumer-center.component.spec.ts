import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpProvidesConsumerCenterComponent } from './ip-provides-consumer-center.component';

describe('IpProvidesConsumerCenterComponent', () => {
  let component: IpProvidesConsumerCenterComponent;
  let fixture: ComponentFixture<IpProvidesConsumerCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpProvidesConsumerCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpProvidesConsumerCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
