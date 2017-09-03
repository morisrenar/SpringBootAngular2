import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsCenterComponent } from './directors-center.component';

describe('DirectorsCenterComponent', () => {
  let component: DirectorsCenterComponent;
  let fixture: ComponentFixture<DirectorsCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorsCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
