import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationInfoListComponent } from './transportation-info-list.component';

describe('TransportationInfoListComponent', () => {
  let component: TransportationInfoListComponent;
  let fixture: ComponentFixture<TransportationInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
