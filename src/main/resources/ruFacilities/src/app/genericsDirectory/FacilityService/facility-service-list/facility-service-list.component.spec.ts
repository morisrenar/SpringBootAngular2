import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityServiceListComponent } from './facility-service-list.component';

describe('FacilityServiceListComponent', () => {
  let component: FacilityServiceListComponent;
  let fixture: ComponentFixture<FacilityServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
