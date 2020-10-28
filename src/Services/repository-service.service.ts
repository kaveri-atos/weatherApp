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
    const weatherData = await this.httpClient.get(this.stringEnum.URLCurrent +"q="+ cityName+"&appid="+this.stringEnum.AppID + "&units=metric")
    .toPromise().then(data => {      
      return data
    }, err => {
      console.log(err);
      return  err.statusText.toString();
    });
    return JSON.stringify(weatherData);
  }
 
  /**
 * Get five days Value
 * @param params CityName
 * @returns JSON Object or 'Error'
 */
async getWeatherValueFiveDays(cityName:string) {  

  const dataOfFiveDays = await this.httpClient.get(this.stringEnum.URLForcast +"q="+ cityName+"&appid="+this.stringEnum.AppID+"&units=metric")
  .toPromise().then(data => {      
    return data
  }, err => {
    console.log(err);
    return  err.statusText.toString();
  });

  return JSON.stringify(dataOfFiveDays);

}

/**
 * get current weather details using user's latitude and longitude
 * @param lat 
 * @param lon 
 */
async getCurrentWeatherByLatLon(lat:number , lon:number){   
 
  const weatherData = await this.httpClient.get(this.stringEnum.URLCurrent +"lat=" + lat +"&lon=" + lon +"&appid="+this.stringEnum.AppID + "&units=metric")
  .toPromise().then(data => {      
    return data
  }, err => {
    console.log(err);
    return  err.statusText.toString();
  });
  return JSON.stringify(weatherData);
}

/**
 * get current weather forecast details using user's latitude and longitude
 * @param lat 
 * @param lon 
 */
// async getWeatherValueFiveDaysByLatLon(lat:number , lon:number) {  

//   const dataOfFiveDays = await this.httpClient.get(this.stringEnum.URLForcast +"lat=" + lat +"&lon=" + lon +"&appid="+this.stringEnum.AppID+"&units=metric")
//   .toPromise().then(data => {      
//     return data
//   }, err => {
//     console.log(err);
//     return  err.statusText.toString();
//   });

//   return JSON.stringify(dataOfFiveDays);

// }


}
