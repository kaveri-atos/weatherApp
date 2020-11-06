import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCurrentCityService {
  userCity:string;
  constructor() { }

  /**
 * return Cityname
 * @param responceString 
 */
public getCurrentUserCity(responceString):string
{
  this.userCity= (JSON.parse(responceString)).address.county;  
  return (this.userCity);
}
}
