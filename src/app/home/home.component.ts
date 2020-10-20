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
 * Store 5 days Date
 */
weatherDate = [];

/**
 * Store 5 days Date
 */
dateForGraphRenderOnly = [];

/**
 * Store 5 days Date
 */
dateNameForGraphRenderOnly = [];

/**
 * Store 5 days Max Temperature
 */  
  dateTempMax = [];
/**
 * Store 5 days Min Temperature
 */ 
  dateTempMin = [];
/**
 * Store Max Temperature in next 5 days
 */ 
  maxTempof5DaysToGrphLimit=0;
/**
 * Store Min Temperature in next 5 days
 */
  minTempof5DaysToraphLimit=0;
/**
 * Value of delta for graph for resizing
 */
  mGraphMaxMinFromTempDelta=7;
/**
 * Store static value for vwetical scroll
 */
  days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  /**
 * Today In Date Count
 */
  dateInDay=0;
/**
 * Max Chart Graph
 */
  lineChartMax: any;
/**
 * Min Chart Graph
 */  
  lineChartMin: any;
/**
 * Background Chart Graph
 */  
  lineChartBckGround: any;

/**
 * Store five days icon
 */   
  fiveDaysWeatherIcon=[];

/**
 * Visible on Data / Invisible on No-Data
 */
backgroundLayoutVisiblity=false;
/**
 * Searchbar input character minimum limit
 */
mSearchBarInputLimit=2




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
    const fiveDaysValue = await this.repositoryAPIService.getWeatherValueFiveDays(cityName);

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

  } 

  onClickLocation(){
    console.log("Clicked on location..");
  }


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
  this.currentTemp='';
  this.weatherData=''; 
  this.wind='';
  this.humidity='';
  this.currentWeatherIcon="";
  this.fiveDaysWeatherIcon=[];
  this.inputFromSearchBox = "";

}


}
