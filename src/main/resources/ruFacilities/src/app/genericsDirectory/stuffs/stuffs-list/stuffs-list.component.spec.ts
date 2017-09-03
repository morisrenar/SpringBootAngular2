import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffsListComponent } from './stuffs-list.component';

describe('StuffsListComponent', () => {
  let component: StuffsListComponent;
  let fixture: ComponentFixture<StuffsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
