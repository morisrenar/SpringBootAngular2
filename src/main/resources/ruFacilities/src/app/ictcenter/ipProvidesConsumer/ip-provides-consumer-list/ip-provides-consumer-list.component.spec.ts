import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpProvidesConsumerListComponent } from './ip-provides-consumer-list.component';

describe('IpProvidesConsumerListComponent', () => {
  let component: IpProvidesConsumerListComponent;
  let fixture: ComponentFixture<IpProvidesConsumerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpProvidesConsumerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpProvidesConsumerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
