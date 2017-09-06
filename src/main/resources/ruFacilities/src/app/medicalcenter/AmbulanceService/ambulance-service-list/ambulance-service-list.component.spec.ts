import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceServiceListComponent } from './ambulance-service-list.component';

describe('AmbulanceServiceListComponent', () => {
  let component: AmbulanceServiceListComponent;
  let fixture: ComponentFixture<AmbulanceServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanceServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
