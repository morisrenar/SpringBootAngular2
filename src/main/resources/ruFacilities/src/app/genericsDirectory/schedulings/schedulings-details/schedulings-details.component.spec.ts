import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingsDetailsComponent } from './schedulings-details.component';

describe('SchedulingsDetailsComponent', () => {
  let component: SchedulingsDetailsComponent;
  let fixture: ComponentFixture<SchedulingsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
