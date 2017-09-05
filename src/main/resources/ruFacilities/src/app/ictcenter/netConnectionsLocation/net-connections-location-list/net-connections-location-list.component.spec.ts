import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetConnectionsLocationListComponent } from './net-connections-location-list.component';

describe('NetConnectionsLocationListComponent', () => {
  let component: NetConnectionsLocationListComponent;
  let fixture: ComponentFixture<NetConnectionsLocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetConnectionsLocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetConnectionsLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
