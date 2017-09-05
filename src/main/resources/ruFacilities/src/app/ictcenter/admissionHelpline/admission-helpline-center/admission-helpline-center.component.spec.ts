import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionHelplineCenterComponent } from './admission-helpline-center.component';

describe('AdmissionHelplineCenterComponent', () => {
  let component: AdmissionHelplineCenterComponent;
  let fixture: ComponentFixture<AdmissionHelplineCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionHelplineCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionHelplineCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
