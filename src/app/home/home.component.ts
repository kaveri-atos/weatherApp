import { Component, OnInit } from '@angular/core';
import {CurrentWeatherDataService} from  '../../Services/current-weather-data.service';
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
 * @param currentWeatherData inject CurrentWeatherDataService into constuctor
 */
  constructor(private currentWeatherData : CurrentWeatherDataService , private businessLogic:BuisnessLogicService) { }

  ngOnInit(): void {   
    this.precipitation = "0";
  }

/**
 * 
 * @param cityName call weather api service
 */
  getCurrentWeather(cityName:string)
  { 
    try {    
        this.currentWeatherData.getCurrentWeather(cityName).subscribe((data)=>{
        console.log(data);     
        this.weatherData = (data);       
        this.city_details_show = false; //show deatis div
        this.city = this.inputFromSearchBox;
        this.currentTemp = data['main'].temp;     
        this.humidity=data['main'].humidity;   
        this.currentWeatherDesc = data['weather'][0].description;
        this.currentWeatherIcon= data['weather'][0].icon;
        this.wind = data['wind'].speed;    
        this.imageURL =this.businessLogic.getWeatherBannerIconFromAssetFolder(this.currentWeatherDesc,this.currentWeatherIcon);
   
    }); 
     console.log("Clicked on Search button... ");        
    console.log(this.imageURL);
  }
  catch(e){
    this.city_details_show = true; //hide deatis div
    console.log("Error" + e);
  }     

  } 

  onClickLocation(){
    console.log("Clicked on location..");
  }

}
