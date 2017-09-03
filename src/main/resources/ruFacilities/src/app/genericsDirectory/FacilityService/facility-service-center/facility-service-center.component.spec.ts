import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityServiceCenterComponent } from './facility-service-center.component';

describe('FacilityServiceCenterComponent', () => {
  let component: FacilityServiceCenterComponent;
  let fixture: ComponentFixture<FacilityServiceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityServiceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
