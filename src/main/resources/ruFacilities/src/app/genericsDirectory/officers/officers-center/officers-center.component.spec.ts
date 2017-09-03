import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficersCenterComponent } from './officers-center.component';

describe('OfficersCenterComponent', () => {
  let component: OfficersCenterComponent;
  let fixture: ComponentFixture<OfficersCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficersCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficersCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
