import { TestBed } from '@angular/core/testing';

import { CurrentWeatherDataService } from './current-weather-data.service';

describe('CurrentWeatherDataService', () => {
  let service: CurrentWeatherDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentWeatherDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
