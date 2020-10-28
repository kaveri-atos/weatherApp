import { TestBed } from '@angular/core/testing';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { RepositoryService } from './repository-service.service';

describe('RepositoryService', () => {
  let service: RepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule ({
      providers: [
       HttpClient,
       HttpErrorResponse
    ]})
   service = TestBed.inject(RepositoryService);
  });

  it('should be created', () => { 
     expect(service).toBeTruthy();
  });

    it('Check methods', () => {  
    expect(service.getCurrentWeather("Kolkata")).toBeTruthy();
    expect(service.getWeatherValueFiveDays("Kolkata")).toBeTruthy();
  });

  it('Check methods123', () => {   
       spyOn(service.getCurrentWeather("Kolkata"), 'then').and.returnValue(undefined);
   
  });
});
