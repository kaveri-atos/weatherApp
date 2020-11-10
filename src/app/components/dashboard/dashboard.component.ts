import { Component, OnInit,ViewChild } from '@angular/core';
import { GetLocationLatLonService} from '../../_appService/get-location-lat-lon.service';
import {UserCurrentCityService} from '../../_appService/user-current-city.service';
import {Logger} from '../../_config/app-logger';
import {RepositoryService} from '../../_appService/repository-service.service';
import {WeatherDataService} from '../../_appService/weather-data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']  
})
export class DashboardComponent implements OnInit {
  @ViewChild('weatherCheck') weatherCheck; //Object of weather check
  @ViewChild('weatherForecast') weatherForecast; //Object of weather check
  userCity:string; //save current user city
  logger:Logger;
  constructor(private getLocationLatLonService:GetLocationLatLonService,
    private UserCurrentCityService:UserCurrentCityService,    
    private repositoryService:RepositoryService,
    private weatherDataService:WeatherDataService) {
      this.logger=new Logger();
    }
    

  ngOnInit(): void {   
   this.getLatLon();   
  }

  
  /**
   * Get Lat Long From GetLocationLatLonService
   */
  async getLatLon(){  
    this.logger.log('get latlon call');  
    const userLatLon= await this.getLocationLatLonService.getGeolocation();
     
    this.logger.log("value coords in dashboard "+JSON.parse(JSON.stringify(userLatLon)).lat + "lat" +JSON.parse(JSON.stringify(userLatLon)).lng);
    if(JSON.parse(JSON.stringify(userLatLon)).lat !=undefined && JSON.parse(JSON.stringify(userLatLon)).lng !=undefined) 
    {
      const userLocationResp = await this.repositoryService.getLocationByLatLon(
      Number(JSON.parse(JSON.stringify(userLatLon)).lat),
      Number(JSON.parse(JSON.stringify(userLatLon)).lng)
      )  
    
      this.weatherDataService.city=this.userCity = await this.UserCurrentCityService.getCurrentUserCity(userLocationResp);
      
    }
    this.weatherCheck.getCurrentWeather(this.userCity);
    this.weatherForecast.getForecastWeather(this.userCity);
    }

   
    
}
