import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionHelplineListComponent } from './admission-helpline-list.component';

describe('AdmissionHelplineListComponent', () => {
  let component: AdmissionHelplineListComponent;
  let fixture: ComponentFixture<AdmissionHelplineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionHelplineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionHelplineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
