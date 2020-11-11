import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeatherDataService} from '../_appService/weather-data.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkApiService {

  constructor(private httpClient: HttpClient, private weatherDataService:WeatherDataService) { }

  async get(apiURL:string){     
    const weatherData = await this.httpClient.get(apiURL)
    .toPromise().then(data => {    
      if (data)  
        this.weatherDataService.isLoadData = true;      
      return data
    }, err => {
      console.log(err);
      return  err.statusText.toString();
    });
    return JSON.stringify(weatherData);

    }

}
