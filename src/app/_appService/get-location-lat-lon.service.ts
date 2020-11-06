import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLocationLatLonService {   
  constructor() {   
   }

  /**
     * Async task for get lat,lon of user's location
     * @returns Promise<JSON>
     */
    async getGeolocation():Promise<any> {     
       return new Promise((resolve, reject) => {
        window.navigator.geolocation.watchPosition(resp => {
               console.log("In service lat :"+resp.coords.latitude + "  long" +resp.coords.longitude);
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});          
        },
        err => {
          reject(err);
        });
      });

    } 

}
