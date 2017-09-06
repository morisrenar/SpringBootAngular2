import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationInfoCenterComponent } from './transportation-info-center.component';

describe('TransportationInfoCenterComponent', () => {
  let component: TransportationInfoCenterComponent;
  let fixture: ComponentFixture<TransportationInfoCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationInfoCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationInfoCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
