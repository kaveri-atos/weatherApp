import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { WeatherCheckComponent } from './weather-check/weather-check.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    DashboardComponent,
    WeatherCheckComponent, 
    WeatherDetailsComponent, 
    WeatherForecastComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
