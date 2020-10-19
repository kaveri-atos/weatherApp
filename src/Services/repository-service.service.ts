import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {StringValueEnum} from '../string-value-enum.enum';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  //private apiKey='ec26d5a74419ecd51a6bf82e5d0e8b3b';
   /**
   * Enum class object
   */
  stringEnum;
  apidata;

  /**
 * Declare url for image fetch from server
 */
  url:string;

  constructor(private httpClient: HttpClient) {
    this.stringEnum=StringValueEnum;
    //this.url=this.stringEnum;
   }

   /**
    * 
    * @param cityName 
    * @returns JSON Object or 'Error'
    */
   async getCurrentWeather(cityName:string){   
    const weatherData = await this.httpClient.get(this.stringEnum.URLCurrent + cityName+"&appid="+this.stringEnum.AppID + "&units=metric")
    .toPromise().then(data => {      
      return data
    }, err => {
      console.log(err);
      return  err.statusText.toString();
    });

    
    // .subscribe(
    //   data  => {
    //     console.log('success', data);
    //     return this.apidata=data;
    //   },
    //   err => {
    //     console.log(err);
    //     return err.statusText.toString();
    //   }
    // );
    // console.log(weatherData);
    
    return JSON.stringify(weatherData);
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

  /**
 * Get five days Value
 * @param params CityName
 * @returns JSON Object or 'Error'
 */
async getWeatherValueFiveDays(cityName:string) {  

  const dataOfFiveDays = await this.httpClient.get(this.stringEnum.URLForcast + cityName+"&appid="+this.stringEnum.AppID)
  .toPromise().then(data => {      
    return data
  }, err => {
    console.log(err);
    return  err.statusText.toString();
  });

  return JSON.stringify(dataOfFiveDays);

}


}
