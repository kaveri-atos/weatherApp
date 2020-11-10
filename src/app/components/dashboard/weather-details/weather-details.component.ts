import { Component, OnInit,Input } from '@angular/core';
import {WeatherDataService} from '../../../_appService/weather-data.service';
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {  
  constructor(private weatherDataService:WeatherDataService) {     
  }

  ngOnInit(): void {}
  

 /**
  * get  precipitation value from WeatherDataService
  */
  get precipitation():string
  {
   return this.weatherDataService.precipitation;
  }

  /**
  * get  humidity value from WeatherDataService
  */
  get humidity():string
  {
   return this.weatherDataService.humidity;
  }

  /**
  * get  wind value from WeatherDataService
  */
  get wind():string
  {
   return this.weatherDataService.wind;
  }

  /**
  * get  isWeatherData value from WeatherDataService to hide or show div
  */
  get isWeatherData():boolean
  {
   return this.weatherDataService.isWeatherData;
  }
 

}
