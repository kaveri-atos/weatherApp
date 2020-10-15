import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {StringValueEnum} from '../string-value-enum.enum';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherDataService {

  //private apiKey='ec26d5a74419ecd51a6bf82e5d0e8b3b';
   /**
   * Enum class object
   */
  stringEnum;

  /**
 * Declare url for image fetch from server
 */
  url:string;

  constructor(private httpClient: HttpClient) {
    this.stringEnum=StringValueEnum;
    //this.url=this.stringEnum;
   }

  public getCurrentWeather(cityName){   
    return this.httpClient.get(this.stringEnum.URLCurrent + cityName+"&appid="+this.stringEnum.AppID + "&units=metric")
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
