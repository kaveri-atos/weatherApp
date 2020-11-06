import { Component, OnInit,Input } from '@angular/core';
import {months} from '../../../_config/app-constant';
import {RepositoryService} from '../../../_appService/repository-service.service';
import {Logger} from '../../../_config/app-logger';
import {WeatherBusinessLogicService} from './Services/weather-business-logic.service'

@Component({
  selector: 'app-weather-check',
  templateUrl: './weather-check.component.html',
  styleUrls: ['./weather-check.component.css']
})
export class WeatherCheckComponent implements OnInit {
private months;
logger;
@Input() userCity: string;
  constructor(private repositoryAPIService:RepositoryService,
    private buisnessLogicService:WeatherBusinessLogicService) { 
      console.log("in weather check cons"+ this.userCity);
    }

  ngOnInit(): void {
    this.months = months;
   // this.logger=Logger;
    console.log(this.months);
    console.log("in weather check"+ this.userCity);
  }

  weatherData:any;  //Store data get from CurrentWeatherDataService
  city: string ; //city to fetch data
  currentTemp: string; //store current Temprature
  wind: string; //store wind data  
  inputFromSearchBox:string;
  currentWeatherIcon:string; //store weather Icon
  currentWeatherDesc:string; //store weather description
  imageURL:string; //store weather image URL  
  stringValueEnum; //store string enum 
  city_details_show:boolean;
  humidity:string;
/**
 * This function calls when click on serach button
 * @param cityName call weather api service
 */
async getCurrentWeather(cityName:string)
{ 
  
      const currentWeatherData =await this.repositoryAPIService.getCurrentWeather(cityName);
      console.log("in weather check -"+ currentWeatherData);    
      const str = currentWeatherData.replace(/\\/g, '');
      console.log(JSON.parse(JSON.stringify(str)));
      var currentWeatherValueAfterParse = this.buisnessLogicService.getCurrentDayValue(JSON.parse(JSON.stringify(currentWeatherData)));
   //   this.logger.log("filter data"+ currentWeatherValueAfterParse);  
          this.city_details_show = false; //show deatis div
          this.city = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).city;
          this.currentTemp = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).currentTemp;
          this.currentWeatherDesc = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).weather;
          this.wind = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).wind;
          this.humidity = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).humidity;
          this.currentWeatherIcon=JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).currentWeatherIcon;
  
  }

  /**
 * get current weather data using users location coords
 */
  onClickLocation(){
    //this.getLatLon(); 
  }



  /**
 *  Reset all variable
 */
public resetVariable(){  
  this.city='';
  this.currentTemp='';
  this.weatherData=''; 
  this.wind=''; 
  this.currentWeatherIcon="";  
  this.inputFromSearchBox = "";

}


}
