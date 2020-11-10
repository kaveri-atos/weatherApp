import { Injectable } from '@angular/core';
import {Logger} from '../_config/app-logger'

@Injectable({
  providedIn: 'root'
})
export class GetLocationLatLonService {   
  logger:Logger;
  constructor() {   
    this.logger=new Logger();
   }

  /**
     * Async task for get lat,lon of user's location
     * @returns Promise<JSON>
     */
    async getGeolocation():Promise<any> {     
       return new Promise((resolve, reject) => {
        window.navigator.geolocation.watchPosition(resp => {
               this.logger.log("In service lat :"+resp.coords.latitude + "  long" +resp.coords.longitude);
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});          
        },
        err => {
          reject(err);
        });
      });

    } 

}
