import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyContactsListComponent } from './emergency-contacts-list.component';

describe('EmergencyContactsListComponent', () => {
  let component: EmergencyContactsListComponent;
  let fixture: ComponentFixture<EmergencyContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyContactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
