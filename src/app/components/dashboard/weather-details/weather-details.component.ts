import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() userCity: string;
  constructor() { }

  ngOnInit(): void {   
    console.log("in weather details "+this.userCity);
  }

  weatherData:any;  //Store data get from CurrentWeatherDataService
  city: string ; //city to fetch data
  currentTemp: string; //store current Temprature
  wind: string; //store wind data  
  precipitation:string; //store weather precipitation
  humidity:string; //store weather humidity  
  stringValueEnum; //store string enum 

  

  /**
 *  Reset all variable
 */
public resetVariable(){  
  this.city='';
  this.currentTemp='';
  this.weatherData=''; 
  this.wind='';
  this.humidity='';  
}

}
