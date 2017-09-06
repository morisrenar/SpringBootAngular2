import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyContactsCenterComponent } from './emergency-contacts-center.component';

describe('EmergencyContactsCenterComponent', () => {
  let component: EmergencyContactsCenterComponent;
  let fixture: ComponentFixture<EmergencyContactsCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyContactsCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyContactsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
