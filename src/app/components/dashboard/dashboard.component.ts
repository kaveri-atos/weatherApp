import { Component, OnInit } from '@angular/core';
import { GetLocationLatLonService} from '../../_appService/get-location-lat-lon.service';
import {UserCurrentCityService} from '../../_appService/user-current-city.service';
import {Logger} from '../../_config/app-logger';
import {RepositoryService} from '../../_appService/repository-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userCity:string; //save current user city
  logger:Logger;
  constructor(private getLocationLatLonService:GetLocationLatLonService,
    private UserCurrentCityService:UserCurrentCityService,    
    private repositoryService:RepositoryService) { }
    

  ngOnInit(): void {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position)=>{
    //     this.longitude = position.coords.longitude;
    //     this.latitude = position.coords.latitude;
    //     console.log(`in init = latitude : ${this.latitude} longitude: ${this.longitude} `);
    //   });

  //   const weatherData = this.httpClient.get("https://nominatim.openstreetmap.org/reverse?format=json&lat="+this.latitude
  //   +"&lon="+this.longitude).toPromise().then(data => {      
  //     return data
  //   }, err => {
  //     console.log(err);
  //     return  err.statusText.toString();
  //   });
  //   console.log(weatherData);
  // }

   this.getLatLon();

  }

  /**
   * Get Lat Long From GetLocationLatLonService
   */
  async getLatLon(){    
    const userLatLon= await this.getLocationLatLonService.getGeolocation();
      
    //this.logger.log("value coords "+JSON.parse(JSON.stringify(userLatLon)).lat + "lat" +JSON.parse(JSON.stringify(userLatLon)).lng);
    if(JSON.parse(JSON.stringify(userLatLon)).lat !=undefined && JSON.parse(JSON.stringify(userLatLon)).lng !=undefined) 
    {
      const userLocationResp = await this.repositoryService.getCurrentWeatherByLatLon(
      Number(JSON.parse(JSON.stringify(userLatLon)).lat),
      Number(JSON.parse(JSON.stringify(userLatLon)).lng)
      )  
    
      this.userCity = await this.UserCurrentCityService.getCurrentUserCity(userLocationResp);
    }
    
    }
  

}
