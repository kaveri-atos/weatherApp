import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherDataService {

  private apiKey='ec26d5a74419ecd51a6bf82e5d0e8b3b';
  
  constructor(private httpClient: HttpClient) { }

  public getCurrentWeather(cityName){   
    return this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+this.apiKey + "&units=metric")
    .pipe(catchError(this.handleError));;
  }
 

/**
 * 
 * @param error 
 */
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = 'Error: ' + error.error.message;
    } else {
      // Server-side errors
      errorMessage = 'Error Code: ' + error.status + '\nMessage:' + error.message;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
