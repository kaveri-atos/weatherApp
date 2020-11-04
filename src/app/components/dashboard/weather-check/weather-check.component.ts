import { Component, OnInit } from '@angular/core';
import {months} from '../../../_config/app-constant';

@Component({
  selector: 'app-weather-check',
  templateUrl: './weather-check.component.html',
  styleUrls: ['./weather-check.component.css']
})
export class WeatherCheckComponent implements OnInit {
private months;
  constructor() { }

  ngOnInit(): void {
    this.months = months;
    console.log(this.months);
  }

}
