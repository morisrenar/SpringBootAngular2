import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCenterComponent } from './tasks-center.component';

describe('TasksCenterComponent', () => {
  let component: TasksCenterComponent;
  let fixture: ComponentFixture<TasksCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
