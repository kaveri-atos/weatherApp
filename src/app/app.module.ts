import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { HeaderModule } from './components/header/header.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {HttpClientModule } from '@angular/common/http'; 
import {RepositoryService} from '../app/_appService/repository-service.service';
import {GetLocationLatLonService} from '../app/_appService/get-location-lat-lon.service';
import {UserCurrentCityService} from '../app/_appService/user-current-city.service';
import {NetworkApiService} from '../app/network-mngt/network-api.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    HeaderModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    RepositoryService,
    GetLocationLatLonService,
    UserCurrentCityService,
    NetworkApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
