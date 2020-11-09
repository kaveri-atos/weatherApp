import { Component, OnInit,Input } from '@angular/core';
//mport {months} from '../../../_config/app-constant';
import {RepositoryService} from '../../../_appService/repository-service.service';
import {Logger} from '../../../_config/app-logger';
import {WeatherBusinessLogicService} from './Services/weather-business-logic.service'
import{WeatherDataService} from '../../../_appService/weather-data.service';
@Component({
  selector: 'app-weather-check',
  templateUrl: './weather-check.component.html',
  styleUrls: ['./weather-check.component.css']
})
export class WeatherCheckComponent implements OnInit {
private months;
logger;
//@Input() userCity: string;
  constructor(private repositoryAPIService:RepositoryService,
    private buisnessLogicService:WeatherBusinessLogicService,
    private weatherDataService:WeatherDataService) { 
     // console.log("in cons"+this.userCity);
    }

  ngOnInit(): void {
  //   this.months = months;
  //  // this.logger=Logger;
  //   console.log(this.months);   
  //console.log(this.userCity);
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
async getCurrentWeather(cityName:string){ 
    
      const currentWeatherData =await this.repositoryAPIService.getCurrentWeather(cityName);       
      var currentWeatherValueAfterParse = this.buisnessLogicService.getCurrentDayValue(JSON.parse(JSON.stringify(currentWeatherData)));
   //   this.logger.log("filter data"+ currentWeatherValueAfterParse);  
          this.city_details_show = false; //show deatis div
          this.city = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).city;
          this.currentTemp = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).currentTemp;
          this.currentWeatherDesc = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).weather;
          this.weatherDataService.wind =this.wind = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).wind;
          this.weatherDataService.humidity =this.humidity = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).humidity;
          this.currentWeatherIcon=JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).currentWeatherIcon;
          
       
  }

  /**
 * get current weather data using users location coords
 */
  onClickLocation(){
    //this.getLatLon(); 
  }

set userCity(value:string)
{
  this.weatherDataService.city= value;
}

get userCity():string
{
  return this.weatherDataService.city;
}

// set setCity(value:string)
// {
//   this.weatherDataService.city= value;
// }
// get getCity():string
// {
//   return this.weatherDataService.city;
// }

// set setCity(value:string)
// {
//   this.weatherDataService.city= value;
// }
// get getCity():string
// {
//   return this.weatherDataService.city;
// }





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
