import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetConnectionsLocationCenterComponent } from './net-connections-location-center.component';

describe('NetConnectionsLocationCenterComponent', () => {
  let component: NetConnectionsLocationCenterComponent;
  let fixture: ComponentFixture<NetConnectionsLocationCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetConnectionsLocationCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetConnectionsLocationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
