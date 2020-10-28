import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
<<<<<<< HEAD
import {StringValueEnum} from '../../string-value-enum.enum';
 import {OverLapGraphForWeatherPredictionService , GetLocationLatLonService,
   RepositoryService,BuisnessLogicService} from '../../Services';

=======
import {RepositoryService} from  '../../Services/repository-service.service';
import {BuisnessLogicService} from '../../Services/buisness-logic.service';
import {StringValueEnum} from '../../string-value-enum.enum';
import { OverLapGraphForWeatherPredictionService } from 'src/Services/over-lap-graph-for-weather-prediction.service';
>>>>>>> 0a92666634106c1ee4016bf1b97031b9b496de04

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
 * lineCanvasMax = Max Line Graph
 */
@ViewChild('lineCanvasMax', { static: false }) lineCanvasMax:ElementRef<HTMLCanvasElement>;;
/**
 * lineCanvasMin = Min Line Graph
 */
  @ViewChild('lineCanvasMin', { static: false }) lineCanvasMin :ElementRef<HTMLCanvasElement>;;
/**
 * lineCanvasBckGround = Background Graph
 */
  @ViewChild('lineCanvasBckGround', { static: false }) lineCanvasBckGround :ElementRef<HTMLCanvasElement>;;

<<<<<<< HEAD
//#region Veriable declaration start
=======

>>>>>>> 0a92666634106c1ee4016bf1b97031b9b496de04
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
<<<<<<< HEAD
  city_details_show: boolean = true;
=======
  show_details: boolean = true;
>>>>>>> 0a92666634106c1ee4016bf1b97031b9b496de04

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
  days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
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
mSearchBarInputLimit=2;

/**
 * store string enum 
 */
stringValueEnum;

<<<<<<< HEAD
//#endregion
=======
>>>>>>> 0a92666634106c1ee4016bf1b97031b9b496de04


/**
 * 
 * @param repositoryService inject CurrentWeatherDataService into constuctor
 */
  constructor(private repositoryAPIService : RepositoryService, 
    private buisnessLogicService:BuisnessLogicService,
<<<<<<< HEAD
    private overlapGraphService:OverLapGraphForWeatherPredictionService,
    private getLocationLatLonService:GetLocationLatLonService) {
      this.stringValueEnum =   StringValueEnum;
     this.getLatLon();          
     }

  ngOnInit(): void {   
    this.precipitation = "0";    
    
  }

  /**
   * Get Lat Long From GetLocationLatLonService
   */
  async getLatLon(){

    const valueFromLocationService= await this.getLocationLatLonService.getGeolocation();

    console.log("value coords "+JSON.parse(JSON.stringify(valueFromLocationService)).lat);
    if(JSON.parse(JSON.stringify(valueFromLocationService)).err!==this.stringValueEnum.Error) 
    {
      const userWeatherData = await this.repositoryAPIService.getCurrentWeatherByLatLon(Number(JSON.parse(JSON.stringify(valueFromLocationService)).lat),Number(JSON.parse(JSON.stringify(valueFromLocationService)).lng));
      let userCity =this.buisnessLogicService.getCurrentUserCity(userWeatherData);    
      this.inputFromSearchBox = userCity;
      this.getCurrentWeather(userCity);
    }
    
    }

 /**
 * This function calls when click on serach button
=======
    private overlapGraphService:OverLapGraphForWeatherPredictionService) {
      this.stringValueEnum =   StringValueEnum;
     }

  ngOnInit(): void {   
    this.precipitation = "0";
  }

 /**
 * 
>>>>>>> 0a92666634106c1ee4016bf1b97031b9b496de04
 * @param cityName call weather api service
 */
  async getCurrentWeather(cityName:string)
  { 
    const fiveDaysValue = await this.repositoryAPIService.getWeatherValueFiveDays(cityName);

    console.log(this.stringValueEnum.UnknownError);
    if (JSON.parse(fiveDaysValue) == this.stringValueEnum.UnknownError || JSON.parse(fiveDaysValue) == this.stringValueEnum.NotFound ) {
   
      //(JSON.parse(fiveDaysValue) == this.stringValueEnum.UnknownError)?this.mUIToastService.presentToastWithArgumentMessage(this.stringValueEnum.PleaseCheckNetworkConnection)
       //                                             :this.mUIToastService.presentToastWithArgumentMessage(this.stringValueEnum.LocationNotFound);      
      this.resetVariable();
<<<<<<< HEAD
      this.city_details_show = true; //hide deatis div     
=======
      this.show_details = true; //hide deatis div     
>>>>>>> 0a92666634106c1ee4016bf1b97031b9b496de04
    }
    else {     
        
        const currentWeatherData =await this.repositoryAPIService.getCurrentWeather(cityName);
        console.log("in home"+ currentWeatherData);    
    
        var currentWeatherValueAfterParse = this.buisnessLogicService.getCurrentDayValue(currentWeatherData);
         console.log("filter data"+ currentWeatherValueAfterParse);  
<<<<<<< HEAD
            this.city_details_show = false; //show deatis div
=======
            this.show_details = false; //show deatis div
>>>>>>> 0a92666634106c1ee4016bf1b97031b9b496de04
            this.city = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).city;
            this.currentTemp = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).currentTemp;
            this.currentWeatherDesc = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).weather;
            this.wind = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).wind;
            this.humidity = JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).humidity;
            this.currentWeatherIcon=JSON.parse(JSON.stringify(currentWeatherValueAfterParse)).currentWeatherIcon;
    
            
       
        /// Insert Date into this.mDate Array
        this.weatherDate=this.buisnessLogicService.getNoOfDays(fiveDaysValue);
        this.dateForGraphRenderOnly=this.buisnessLogicService.formatDateForDateAndMonth(this.weatherDate);
<<<<<<< HEAD
         this.dateForGraphRenderOnly=this.buisnessLogicService.getDayOfWeek(this.dateInDay);
=======
         this.dateNameForGraphRenderOnly=this.buisnessLogicService.getDayOfWeek(this.dateInDay);
>>>>>>> 0a92666634106c1ee4016bf1b97031b9b496de04
        


        this.dateForGraphRenderOnly=[]
        var monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
        for (let i = 0; i < this.weatherDate.length; i++) {
          this.dateForGraphRenderOnly.push(this.weatherDate[i].split("-")[2]+" "+monthNames[parseInt(this.weatherDate[i].split("-")[1])-1]);
          }
 
        var getResultAfterFormating=this.buisnessLogicService.getFiveDaysValueInFormat(this.weatherDate,fiveDaysValue);
        this.dateTempMax=getResultAfterFormating[0];
        this.dateTempMin=getResultAfterFormating[1];
        this.fiveDaysWeatherIcon=getResultAfterFormating[2];

        console.log("Graph Calling");
          this.maxTempof5DaysToGrphLimit=Math.max(...this.dateTempMax)+this.mGraphMaxMinFromTempDelta;
         this.minTempof5DaysToraphLimit=Math.min(...this.dateTempMin)-this.mGraphMaxMinFromTempDelta;

<<<<<<< HEAD
       
=======
         
>>>>>>> 0a92666634106c1ee4016bf1b97031b9b496de04
        this.overlapGraphService.showGraph(this.lineChartMax, this.lineCanvasMax, this.weatherDate,
          this.dateTempMax, this.stringValueEnum.Highest, 'rgba(225,217,104)',this.minTempof5DaysToraphLimit
          ,this.maxTempof5DaysToGrphLimit);

        this.overlapGraphService.showGraph(this.lineChartMin, this.lineCanvasMin, this.weatherDate
          , this.dateTempMin, this.stringValueEnum.Lowest, 'rgba(15,148,225)',this.minTempof5DaysToraphLimit
          ,this.maxTempof5DaysToGrphLimit);

          this.overlapGraphService.showGraph(this.lineChartBckGround, this.lineCanvasBckGround, this.weatherDate
            , [this.maxTempof5DaysToGrphLimit,this.maxTempof5DaysToGrphLimit,
               this.maxTempof5DaysToGrphLimit,this.maxTempof5DaysToGrphLimit,
               this.maxTempof5DaysToGrphLimit,this.maxTempof5DaysToGrphLimit], 
               '', 'rgba(15,148,225)',this.minTempof5DaysToraphLimit,
               this.maxTempof5DaysToGrphLimit);

          console.log(Math.max(...this.dateTempMax)+"   "+Math.min(...this.dateTempMin))

      
    }

  } 

<<<<<<< HEAD

 

/**
 * get current weather data using users location coords
 */
  onClickLocation(){
    this.getLatLon(); 
=======
  onClickLocation(){
    console.log("Clicked on location..");
>>>>>>> 0a92666634106c1ee4016bf1b97031b9b496de04
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
