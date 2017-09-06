import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpProvidesConsumerDetailsComponent } from './ip-provides-consumer-details.component';

describe('IpProvidesConsumerDetailsComponent', () => {
  let component: IpProvidesConsumerDetailsComponent;
  let fixture: ComponentFixture<IpProvidesConsumerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpProvidesConsumerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpProvidesConsumerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
