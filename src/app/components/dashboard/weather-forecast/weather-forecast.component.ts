import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { dayNames, months } from '../../../_config/app-constant';
import { RepositoryService } from '../../../_appService/repository-service.service';
import { OverLapGraphForWeatherPredictionService } from './Services/over-lap-graph-for-weather-prediction.service';
import { Logger } from '../../../_config/app-logger';
import { ForecastBusinessLogicService } from './Services/forecast-business-logic.service';
import { StringValueEnum } from '../../../_config/string-value-enum.enum';
import {WeatherDataService} from '../../../_appService/weather-data.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  @Input() userCity: string;
  logger: Logger;
  monthNames;
  constructor(private repositoryAPIService: RepositoryService,
    private overlapGraphService: OverLapGraphForWeatherPredictionService,
    private buisnessLogicService: ForecastBusinessLogicService,
    private weatherDataService:WeatherDataService) {
    this.logger = new Logger(); //logger object
    this.stringValueEnum = StringValueEnum; //constant string object
  }

  ngOnInit(): void {
    this.logger.log("in weather details " + this.userCity);
    if (this.weatherDataService.subsVar==undefined) {    
      this.weatherDataService.subsVar = this.weatherDataService.    
      invokeForecastDataFun.subscribe((city:string) => {    
        this.getForecastWeather(city);    
      });    
    }    
  }

  city: string; //city to fetch data
  city_details_show: boolean = true; //city div show or hide
  imageURL: string; //store weather image URL
  weatherDate = []; //Store 5 days Date
  dateForGraphRenderOnly = []; //Store 5 days Date
  dateNameForGraphRenderOnly = []; //Store 5 days Date
  dateTempMax = []; //Store 5 days Max Temperature
  dateTempMin = [];
  maxTempof5DaysToGrphLimit = 0; //Store 5 days Min Temperature
  minTempof5DaysToraphLimit = 0; //Store Min Temperature in next 5 days
  graphMaxMinFromTempDelta = 7; //Value of delta for graph for resizing
  days = dayNames //Store static value for vwetical scroll
  dateInDay = 0;  //Today In Date Count
  lineChartMax: any;
  lineChartMin: any; //Min Chart Graph
  lineChartBckGround: any; //Background Chart Graph
  fiveDaysWeatherIcon = []; //Store five days icon
  backgroundLayoutVisiblity = false; //Visible on Data / Invisible on No-Data
  searchBarInputLimit = 2; // Searchbar input character minimum limit
  stringValueEnum; //store string enum 


  /**
   * lineCanvasMax = Max Line Graph
   */
  @ViewChild('lineCanvasMax', { static: false }) lineCanvasMax: ElementRef<HTMLCanvasElement>;;
  /**
   * lineCanvasMin = Min Line Graph
   */
  @ViewChild('lineCanvasMin', { static: false }) lineCanvasMin: ElementRef<HTMLCanvasElement>;;
  /**
   * lineCanvasBckGround = Background Graph
   */
  @ViewChild('lineCanvasBckGround', { static: false }) lineCanvasBckGround: ElementRef<HTMLCanvasElement>;;


  async getForecastWeather(cityName: string) {
  
    const fiveDaysValue = await this.repositoryAPIService.getWeatherValueFiveDays(cityName);
    
    this.logger.log(this.stringValueEnum.UnknownError);
    if (JSON.parse(fiveDaysValue) == this.stringValueEnum.UnknownError || JSON.parse(fiveDaysValue) == this.stringValueEnum.NotFound) {

      //(JSON.parse(fiveDaysValue) == this.stringValueEnum.UnknownError)?this.mUIToastService.presentToastWithArgumentMessage(this.stringValueEnum.PleaseCheckNetworkConnection)
      //                                             :this.mUIToastService.presentToastWithArgumentMessage(this.stringValueEnum.LocationNotFound);      
      this.resetVariable();

    }
    else {
      /// Insert Date into this.mDate Array     

      this.weatherDate = this.buisnessLogicService.getNoOfDays(fiveDaysValue);
      this.dateForGraphRenderOnly = this.buisnessLogicService.formatDateForDateAndMonth(this.weatherDate);
      this.dateForGraphRenderOnly = this.buisnessLogicService.getDayOfWeek(this.dateInDay);

      this.dateForGraphRenderOnly = []
      var monthNames = months;
      for (let i = 0; i < this.weatherDate.length; i++) {
        this.dateForGraphRenderOnly.push(this.weatherDate[i].split("-")[2] + " " + monthNames[parseInt(this.weatherDate[i].split("-")[1]) - 1]);
      }

      var getResultAfterFormating = this.buisnessLogicService.getFiveDaysValueInFormat(this.weatherDate, fiveDaysValue);
      this.dateTempMax = getResultAfterFormating[0];
      this.dateTempMin = getResultAfterFormating[1];
      this.fiveDaysWeatherIcon = getResultAfterFormating[2];

      this.logger.log("Graph Calling");
      this.maxTempof5DaysToGrphLimit = Math.max(...this.dateTempMax) + this.graphMaxMinFromTempDelta;
      this.minTempof5DaysToraphLimit = Math.min(...this.dateTempMin) - this.graphMaxMinFromTempDelta;


      this.overlapGraphService.showGraph(this.lineChartMax, this.lineCanvasMax, this.weatherDate,
        this.dateTempMax, this.stringValueEnum.Highest, 'rgba(225,217,104)', this.minTempof5DaysToraphLimit
        , this.maxTempof5DaysToGrphLimit);

      this.overlapGraphService.showGraph(this.lineChartMin, this.lineCanvasMin, this.weatherDate
        , this.dateTempMin, this.stringValueEnum.Lowest, 'rgba(15,148,225)', this.minTempof5DaysToraphLimit
        , this.maxTempof5DaysToGrphLimit);

      this.overlapGraphService.showGraph(this.lineChartBckGround, this.lineCanvasBckGround, this.weatherDate
        , [this.maxTempof5DaysToGrphLimit, this.maxTempof5DaysToGrphLimit,
        this.maxTempof5DaysToGrphLimit, this.maxTempof5DaysToGrphLimit,
        this.maxTempof5DaysToGrphLimit, this.maxTempof5DaysToGrphLimit],
        '', 'rgba(15,148,225)', this.minTempof5DaysToraphLimit,
        this.maxTempof5DaysToGrphLimit);

      this.logger.log(Math.max(...this.dateTempMax) + "   " + Math.min(...this.dateTempMin))




    }

  }

  get isWeatherData():boolean
  {
   return this.weatherDataService.isWeatherData;
  }

  /**
   *  Reset all variable
   */
  public resetVariable() {
    this.backgroundLayoutVisiblity = false;
    this.weatherDate = [];
    this.dateForGraphRenderOnly = [];
    this.dateNameForGraphRenderOnly = [];
    this.dateTempMax = [];
    this.dateTempMin = [];
    this.maxTempof5DaysToGrphLimit = 0;
    this.minTempof5DaysToraphLimit = 0;
    this.city = '';
  }


}
