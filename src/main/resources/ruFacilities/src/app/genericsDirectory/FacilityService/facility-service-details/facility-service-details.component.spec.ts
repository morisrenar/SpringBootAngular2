import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityServiceDetailsComponent } from './facility-service-details.component';

describe('FacilityServiceDetailsComponent', () => {
  let component: FacilityServiceDetailsComponent;
  let fixture: ComponentFixture<FacilityServiceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityServiceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
