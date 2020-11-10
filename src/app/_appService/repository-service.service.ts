import { Injectable } from '@angular/core';
import {StringValueEnum} from '../_config/string-value-enum.enum';
import {NetworkApiService} from '../network-mngt/network-api.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  
  stringEnum; //enum const object
  apidata;
  url:string; //url for image whitch is fetch from server
  

  constructor(private networkAPI:NetworkApiService) {
    this.stringEnum=StringValueEnum;    
    
   }

   /**
    * 
    * @param cityName 
    * @returns JSON Object or 'Error'
    */
   async getCurrentWeather(cityName:string){   
    const weatherData = await this.networkAPI.get(this.stringEnum.URLCurrent + cityName+"&appid="+this.stringEnum.AppID + "&units=metric");
    return weatherData;
  }
 
  /**
 * Get five days Value
 * @param params CityName
 * @returns JSON Object or 'Error'
 */
async getWeatherValueFiveDays(cityName:string) {  
  const weatherData = await this.networkAPI.get(this.stringEnum.URLForcast + cityName+"&appid="+this.stringEnum.AppID + "&units=metric");
  return weatherData;
}

/**
 * 
 * @param lat 
 * @param lon  //return city name 
 */
async getLocationByLatLon(lat:number , lon:number){   
  const weatherData = await this.networkAPI.get(this.stringEnum.URLUserLocation + lat +"&lon=" + lon); 
    return weatherData;  
}



}
