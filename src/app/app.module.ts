import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule } from '@angular/common/http'; 
import {RepositoryService} from  '../Services/repository-service.service';
import { BuisnessLogicService } from 'src/Services/buisness-logic.service';
import { OverLapGraphForWeatherPredictionService } from 'src/Services/over-lap-graph-for-weather-prediction.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RepositoryService,
    BuisnessLogicService,
    OverLapGraphForWeatherPredictionService
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { } 
