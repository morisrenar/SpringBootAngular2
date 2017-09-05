import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationInfoComponent } from './transportation-info.component';

describe('TransportationInfoComponent', () => {
  let component: TransportationInfoComponent;
  let fixture: ComponentFixture<TransportationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
