import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkApiService {

  constructor(private httpClient: HttpClient) { }

  async get(apiURL:string){     
    const weatherData = await this.httpClient.get(apiURL)
    .toPromise().then(data => {      
      return data
    }, err => {
      console.log(err);
      return  err.statusText.toString();
    });
    return JSON.stringify(weatherData);

    }

}
