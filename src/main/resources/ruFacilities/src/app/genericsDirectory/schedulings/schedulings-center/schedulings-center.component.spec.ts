import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingsCenterComponent } from './schedulings-center.component';

describe('SchedulingsCenterComponent', () => {
  let component: SchedulingsCenterComponent;
  let fixture: ComponentFixture<SchedulingsCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingsCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
