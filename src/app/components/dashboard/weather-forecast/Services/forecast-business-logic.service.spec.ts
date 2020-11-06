import { TestBed } from '@angular/core/testing';

import { ForecastBusinessLogicService } from './forecast-business-logic.service';

describe('ForecastBusinessLogicService', () => {
  let service: ForecastBusinessLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastBusinessLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
