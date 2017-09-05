import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionHelplineDetailsComponent } from './admission-helpline-details.component';

describe('AdmissionHelplineDetailsComponent', () => {
  let component: AdmissionHelplineDetailsComponent;
  let fixture: ComponentFixture<AdmissionHelplineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionHelplineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionHelplineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
