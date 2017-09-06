import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistListComponent } from './specialist-list.component';

describe('SpecialistListComponent', () => {
  let component: SpecialistListComponent;
  let fixture: ComponentFixture<SpecialistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
