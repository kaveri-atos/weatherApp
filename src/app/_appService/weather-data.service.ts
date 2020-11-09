import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor() { }
  city:string;
  wind:string;
  humidity:string;
  precipitation="0";
}
