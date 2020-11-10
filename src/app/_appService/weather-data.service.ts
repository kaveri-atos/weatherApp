import { Injectable ,EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';   

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor() { }
  city:string; //store city
  wind:string;  // store wind data from current weather
  humidity:string; //store humidity data from current weather
  precipitation="0"; //store humidity precipitation from current weather
  isWeatherData:boolean //store if data is fetch from griven city or not
  invokeForecastDataFun = new EventEmitter();    
  subsVar: Subscription;   

  getForecastWeatherData() {    
    this.invokeForecastDataFun.emit(this.city);    
  }    

}



