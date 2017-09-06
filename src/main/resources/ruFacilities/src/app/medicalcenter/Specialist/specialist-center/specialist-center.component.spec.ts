import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistCenterComponent } from './specialist-center.component';

describe('SpecialistCenterComponent', () => {
  let component: SpecialistCenterComponent;
  let fixture: ComponentFixture<SpecialistCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
