import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffsDetailsComponent } from './stuffs-details.component';

describe('StuffsDetailsComponent', () => {
  let component: StuffsDetailsComponent;
  let fixture: ComponentFixture<StuffsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
