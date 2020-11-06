import { TestBed } from '@angular/core/testing';

import { DetailBusinessLogicService } from './detail-business-logic.service';

describe('DetailBusinessLogicService', () => {
  let service: DetailBusinessLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailBusinessLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
