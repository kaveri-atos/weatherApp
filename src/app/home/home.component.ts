import { Component, OnInit } from '@angular/core';
import {CurrentWeatherDataService} from  '../../Services/current-weather-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weatherData:any;  
  city: string ;
  currentTemp: string;
  weather: string;
  wind: string;
  city_details_show: boolean = true;
  inputFromSearchBox:string;

/**
 * 
 * @param currentWeatherData inject CurrentWeatherDataService into constuctor
 */
  constructor(private currentWeatherData : CurrentWeatherDataService) { }

  ngOnInit(): void {   
  }

/**
 * 
 * @param cityName call weather api service
 */
  getCurrentWeather(cityName:string)
  { 
    try {    
        this.currentWeatherData.getCurrentWeather(cityName).subscribe((data)=>{
        //console.log(data);     
        this.weatherData = (data);       
        this.city_details_show = false; //show deatis div
        this.city = this.inputFromSearchBox;
        this.currentTemp = data['main'].temp;
        this.weather = data['weather'].map(data => data.description);        
        this.wind = data['wind'].speed; 
        console.log("Clicked on Search button... ");        
      
  
    }); 
  }
  catch(e){
    this.city_details_show = true; //hide deatis div
    console.log("Error" + e);
  }     

  } 

}
