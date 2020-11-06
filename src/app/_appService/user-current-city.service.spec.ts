import { TestBed } from '@angular/core/testing';

import { UserCurrentCityService } from './user-current-city.service';

describe('UserCurrentCityService', () => {
  let service: UserCurrentCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCurrentCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
