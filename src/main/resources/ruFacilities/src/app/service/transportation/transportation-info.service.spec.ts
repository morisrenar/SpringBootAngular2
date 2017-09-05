import { TestBed, inject } from '@angular/core/testing';

import { TransportationInfoService } from './transportation-info.service';

describe('TransportationInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransportationInfoService]
    });
  });

  it('should be created', inject([TransportationInfoService], (service: TransportationInfoService) => {
    expect(service).toBeTruthy();
  }));
});
