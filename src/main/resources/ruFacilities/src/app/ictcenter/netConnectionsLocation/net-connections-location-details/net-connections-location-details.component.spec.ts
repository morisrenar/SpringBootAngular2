import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetConnectionsLocationDetailsComponent } from './net-connections-location-details.component';

describe('NetConnectionsLocationDetailsComponent', () => {
  let component: NetConnectionsLocationDetailsComponent;
  let fixture: ComponentFixture<NetConnectionsLocationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetConnectionsLocationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetConnectionsLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
