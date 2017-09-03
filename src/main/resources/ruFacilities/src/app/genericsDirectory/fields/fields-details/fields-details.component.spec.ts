import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsDetailsComponent } from './fields-details.component';

describe('FieldsDetailsComponent', () => {
  let component: FieldsDetailsComponent;
  let fixture: ComponentFixture<FieldsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
