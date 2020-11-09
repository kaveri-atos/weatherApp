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
  


  get precipitation():string
  {
   return this.weatherDataService.precipitation;
  }

  get humidity():string
  {
   return this.weatherDataService.humidity;
  }
  get wind():string
  {
   return this.weatherDataService.wind;
  }

 

}
