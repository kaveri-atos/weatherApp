import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule } from '@angular/common/http'; 
import {RepositoryService , LoggerService ,BuisnessLogicService,
  OverLapGraphForWeatherPredictionService} from  '../Services';


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
    OverLapGraphForWeatherPredictionService,
    LoggerService
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { } 
