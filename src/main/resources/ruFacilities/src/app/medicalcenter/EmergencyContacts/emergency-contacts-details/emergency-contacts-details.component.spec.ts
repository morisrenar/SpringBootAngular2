import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyContactsDetailsComponent } from './emergency-contacts-details.component';

describe('EmergencyContactsDetailsComponent', () => {
  let component: EmergencyContactsDetailsComponent;
  let fixture: ComponentFixture<EmergencyContactsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyContactsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyContactsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
