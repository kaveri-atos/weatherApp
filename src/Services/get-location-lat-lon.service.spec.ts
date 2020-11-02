import { TestBed } from '@angular/core/testing';

import { GetLocationLatLonService } from './get-location-lat-lon.service';

describe('GetLocationLatLonService', () => {
  let service: GetLocationLatLonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLocationLatLonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
