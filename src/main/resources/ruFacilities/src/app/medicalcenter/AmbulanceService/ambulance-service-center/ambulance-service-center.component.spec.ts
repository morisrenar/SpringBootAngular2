import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceServiceCenterComponent } from './ambulance-service-center.component';

describe('AmbulanceServiceCenterComponent', () => {
  let component: AmbulanceServiceCenterComponent;
  let fixture: ComponentFixture<AmbulanceServiceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanceServiceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
