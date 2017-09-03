import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffsCenterComponent } from './stuffs-center.component';

describe('StuffsCenterComponent', () => {
  let component: StuffsCenterComponent;
  let fixture: ComponentFixture<StuffsCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffsCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
