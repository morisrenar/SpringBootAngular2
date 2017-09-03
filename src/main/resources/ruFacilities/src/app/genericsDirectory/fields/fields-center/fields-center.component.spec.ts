import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsCenterComponent } from './fields-center.component';

describe('FieldsCenterComponent', () => {
  let component: FieldsCenterComponent;
  let fixture: ComponentFixture<FieldsCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
