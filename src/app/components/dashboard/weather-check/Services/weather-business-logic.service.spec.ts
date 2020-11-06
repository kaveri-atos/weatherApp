import { TestBed } from '@angular/core/testing';

import { WeatherBusinessLogicService } from './weather-business-logic.service';

describe('WeatherBusinessLogicService', () => {
  let service: WeatherBusinessLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherBusinessLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
