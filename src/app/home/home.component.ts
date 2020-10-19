import { Component, OnInit } from '@angular/core';
import {RepositoryService} from  '../../Services/repository-service.service';
import {BuisnessLogicService} from '../../Services/buisness-logic.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
/**
 * HomeComponent class
 */
export class HomeComponent implements OnInit {
/**
 *  Store data get from CurrentWeatherDataService
 */
  weatherData:any;  
  /**
   * city to fetch data
   */
  city: string ;

  /**
   * store current Temprature
   */
  currentTemp: string;

  /**
   * store wind data
   */
  wind: string;

  /**
   * city div show or hide
   */
  city_details_show: boolean = true;

  /**
   * 
   */
  inputFromSearchBox:string;

  /**
   * store weather Icon
   */
  currentWeatherIcon:string;

  /**
   * store weather description
   */
  currentWeatherDesc:string;

  /**
   * store weather image URL
   */
  imageURL:string;

  /**
   * store weather precipitation
   */
  precipitation:string;
  

  /**
   * store weather humidity
   */
  humidity:string;

  


/**
 * 
 * @param repositoryService inject CurrentWeatherDataService into constuctor
 */
  constructor(private repositoryAPIService : RepositoryService , private businessLogic:BuisnessLogicService) { }

  ngOnInit(): void {   
    this.precipitation = "0";
  }

/**
 * 
 * @param cityName call weather api service
 */
  async getCurrentWeather(cityName:string)
  { 
    const mFiveDaysValue = await this.repositoryAPIService.getWeatherValueFiveDays(cityName);

    const currentWeatherData =await this.repositoryAPIService.getCurrentWeather(cityName);
    console.log("in home"+ currentWeatherData);    

    var currentWeatherValueAfterParse = this.businessLogic.getCurrentDayValue(currentWeatherData);
     console.log("filter data"+ currentWeatherValueAfterParse);  
        this.city_details_show = false; //show deatis div
        this.city = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).city;
        this.currentTemp = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).currentTemp;
        this.currentWeatherDesc = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).weather;
        this.wind = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).wind;
        this.humidity = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).humidity;
        this.currentWeatherIcon=JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).currentWeatherIcon;

     
          
      
    
  //   try {    
  //       this.repositoryService.getCurrentWeather(cityName).subscribe((data)=>{
  //       console.log(data);     
  //       this.weatherData = (data);       
  //       this.city_details_show = false; //show deatis div
  //       this.city = this.inputFromSearchBox;
  //       this.currentTemp = data['main'].temp;     
  //       this.humidity=data['main'].humidity;   
  //       this.currentWeatherDesc = data['weather'][0].description;
  //       this.currentWeatherIcon= data['weather'][0].icon;
  //       this.wind = data['wind'].speed;    
  //       this.imageURL =this.businessLogic.getWeatherBannerIconFromAssetFolder(this.currentWeatherDesc,this.currentWeatherIcon);
   
  //   }); 
  //    console.log("Clicked on Search button... ");        
  //   console.log(this.imageURL);
  // }
  // catch(e){
  //   this.city_details_show = true; //hide deatis div
  //   console.log("Error" + e);
  // }     

  } 

  onClickLocation(){
    console.log("Clicked on location..");
  }

}
