import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceServiceDetailsComponent } from './ambulance-service-details.component';

describe('AmbulanceServiceDetailsComponent', () => {
  let component: AmbulanceServiceDetailsComponent;
  let fixture: ComponentFixture<AmbulanceServiceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanceServiceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
