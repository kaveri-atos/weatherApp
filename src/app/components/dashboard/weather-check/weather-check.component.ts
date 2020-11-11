import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {RepositoryService} from '../../../_appService/repository-service.service';
import {Logger} from '../../../_config/app-logger';
import {WeatherBusinessLogicService} from './Services/weather-business-logic.service'
import {WeatherDataService} from '../../../_appService/weather-data.service';
import {StringValueEnum} from '../../../_config/string-value-enum.enum';

@Component({
  selector: 'app-weather-check',
  templateUrl: './weather-check.component.html',
  styleUrls: ['./weather-check.component.css']
})
export class WeatherCheckComponent implements OnInit {
@Output() dashboardParent = new EventEmitter<string>();
logger;

  constructor(private repositoryAPIService:RepositoryService,
    private buisnessLogicService:WeatherBusinessLogicService,
    private weatherDataService:WeatherDataService) { 
      this.logger = new Logger(); //logger object
      this.stringValueEnum=StringValueEnum; //constant string object
    }

  ngOnInit(): void {
  }

  weatherData:any;  //Store data get from CurrentWeatherDataService
  city: string ; //city to fetch data
  currentTemp: string; //store current Temprature
 // wind: string; //store wind data  
  inputFromSearchBox:string;
  currentWeatherIcon:string; //store weather Icon
  currentWeatherDesc:string; //store weather description
  imageURL:string; //store weather image URL  
  stringValueEnum; //store string enum 
  city_details_show:boolean;
  //humidity:string;
 // backgroundLayoutVisiblity=true;

/**
 * This function calls when click on serach button
 * @param cityName call weather api service
 */
async getCurrentWeather(cityName:string){ 
      this.weatherDataService.isLoadData = false;     //show spinner
      const currentWeatherData =await this.repositoryAPIService.getCurrentWeather(cityName);      
      this.logger.log("in weather check "+ currentWeatherData);
       
      if (JSON.parse(currentWeatherData) == this.stringValueEnum.UnknownError || JSON.parse(currentWeatherData) == this.stringValueEnum.NotFound) {

        //(JSON.parse(fiveDaysValue) == this.stringValueEnum.UnknownError)?this.mUIToastService.presentToastWithArgumentMessage(this.stringValueEnum.PleaseCheckNetworkConnection)
        //
        this.resetVariable();    
        this.weatherDataService.isWeatherData=true;
        //window.alert("data not found");
        }
        else
        {
          this.weatherDataService.isWeatherData=false;
          var currentWeatherValueAfterParse = this.buisnessLogicService.getCurrentDayValue(JSON.parse(JSON.stringify(currentWeatherData)));
          this.logger.log("filter data"+ currentWeatherValueAfterParse);  
          this.city_details_show = false; //show deatis div
          this.city = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).city;
          this.currentTemp = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).currentTemp;
          this.currentWeatherDesc = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).weather;
          this.weatherDataService.wind = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).wind;
          this.weatherDataService.humidity = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).humidity;
          this.currentWeatherIcon=JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).currentWeatherIcon;
          this.weatherDataService.getForecastWeatherData();   

        }       
      
       
  }

  /**
 * get current weather data using users location coords
 */
  onClickLocation(){
    this.weatherDataService.isLoadData = false;     
    this.logger.log("onClickLocation call");    
    this.dashboardParent.emit(); //emit parent function
  }

set userCity(value:string)
{
  this.weatherDataService.city= value;
}

get userCity():string
{
  return this.weatherDataService.city;
}

get isWeatherData():boolean
{
  return this.weatherDataService.isWeatherData;
}

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

get isLoadData():boolean
{
 return this.weatherDataService.isLoadData;
}


  /**
 *  Reset all variable
 */
public resetVariable(){  
  this.city='';
  this.currentTemp='';
  this.weatherData=''; 
 // this.wind=''; 
  this.currentWeatherIcon="";  
  this.inputFromSearchBox = "";

}


}
