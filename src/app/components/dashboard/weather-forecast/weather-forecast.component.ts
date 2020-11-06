import { Component, OnInit,ViewChild,ElementRef ,Input} from '@angular/core';
import {dayNames} from '../../../_config/app-constant'

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  @Input() userCity: string;
  constructor() { }

  ngOnInit(): void {   
    console.log("in weather details "+this.userCity);
  }
    /**
 * lineCanvasMax = Max Line Graph
 */
//@ViewChild('lineCanvasMax', { static: false }) lineCanvasMax:ElementRef<HTMLCanvasElement>;;
/**
 * lineCanvasMin = Min Line Graph
 */
  //@ViewChild('lineCanvasMin', { static: false }) lineCanvasMin :ElementRef<HTMLCanvasElement>;;
/**
 * lineCanvasBckGround = Background Graph
 */
  //@ViewChild('lineCanvasBckGround', { static: false }) lineCanvasBckGround :ElementRef<HTMLCanvasElement>;;


city: string ; //city to fetch data
city_details_show: boolean = true; //city div show or hide
imageURL:string; //store weather image URL
weatherDate = []; //Store 5 days Date
dateForGraphRenderOnly = []; //Store 5 days Date
dateNameForGraphRenderOnly = []; //Store 5 days Date
dateTempMax = []; //Store 5 days Max Temperature
dateTempMin = [];
maxTempof5DaysToGrphLimit=0; //Store 5 days Min Temperature
minTempof5DaysToraphLimit=0; //Store Min Temperature in next 5 days
graphMaxMinFromTempDelta=7; //Value of delta for graph for resizing
days = dayNames //Store static value for vwetical scroll
dateInDay=0;  //Today In Date Count
lineChartMax: any;
lineChartMin: any; //Min Chart Graph
lineChartBckGround: any; //Background Chart Graph
fiveDaysWeatherIcon=[]; //Store five days icon
backgroundLayoutVisiblity=false; //Visible on Data / Invisible on No-Data
searchBarInputLimit=2; // Searchbar input character minimum limit
stringValueEnum; //store string enum 



/**
 *  Reset all variable
 */
public resetVariable(){
  this.backgroundLayoutVisiblity=false;
  this.weatherDate = [];
  this.dateForGraphRenderOnly = [];
  this.dateNameForGraphRenderOnly = [];
  this.dateTempMax = [];
  this.dateTempMin = [];
  this.maxTempof5DaysToGrphLimit=0;
  this.minTempof5DaysToraphLimit=0;
  this.city='';  
}


}
