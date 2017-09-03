import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingsListComponent } from './schedulings-list.component';

describe('SchedulingsListComponent', () => {
  let component: SchedulingsListComponent;
  let fixture: ComponentFixture<SchedulingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
