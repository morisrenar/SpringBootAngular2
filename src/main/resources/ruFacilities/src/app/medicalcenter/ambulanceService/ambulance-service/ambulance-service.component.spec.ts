import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceServiceComponent } from './ambulance-service.component';

describe('AmbulanceServiceComponent', () => {
  let component: AmbulanceServiceComponent;
  let fixture: ComponentFixture<AmbulanceServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanceServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
