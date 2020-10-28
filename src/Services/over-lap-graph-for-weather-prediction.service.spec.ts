import { TestBed } from '@angular/core/testing';

import { OverLapGraphForWeatherPredictionService } from './over-lap-graph-for-weather-prediction.service';

describe('OverLapGraphForWeatherPredictionService', () => {
  let service: OverLapGraphForWeatherPredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverLapGraphForWeatherPredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
