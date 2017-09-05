import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpProvidesConsumerComponent } from './ip-provides-consumer.component';

describe('IpProvidesConsumerComponent', () => {
  let component: IpProvidesConsumerComponent;
  let fixture: ComponentFixture<IpProvidesConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpProvidesConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpProvidesConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
