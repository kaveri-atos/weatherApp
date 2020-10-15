import { TestBed } from '@angular/core/testing';

import { BuisnessLogicService } from './buisness-logic.service';

describe('BuisnessLogicService', () => {
  let service: BuisnessLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuisnessLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
