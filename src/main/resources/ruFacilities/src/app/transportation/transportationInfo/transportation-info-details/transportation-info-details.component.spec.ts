import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationInfoDetailsComponent } from './transportation-info-details.component';

describe('TransportationInfoDetailsComponent', () => {
  let component: TransportationInfoDetailsComponent;
  let fixture: ComponentFixture<TransportationInfoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationInfoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
