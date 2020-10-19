import { Injectable } from '@angular/core';
import {StringValueEnum} from '../string-value-enum.enum';

@Injectable({
  providedIn: 'root'
})
export class BuisnessLogicService {
/**
   * Enum class object
   */
  stringEnum;

  /**
 * Declare url for image fetch from server
 */
  url:string;
  constructor() { 
    this.stringEnum=StringValueEnum;
    this.url=this.stringEnum.WEATHERICONURL;
  }


  public getWeatherBannerIconFromAssetFolder(mWeatherType: string,icon:string): string {
debugger;
    switch (mWeatherType) {
      case "clear sky": {
        return "/assets/images/icon/clear_sky.png";
        break;
      }

      case "few clouds": {
        return "/assets/images/icon/few_clouds.png";
        break;
      }
      case "few clouds night": {
        return "/assets/images/icon/Few_Clouds_night.png";
        break;
      }

      case "scattered clouds": {
        return "/assets/images/icon/scattered_clouds.png";
        break;
      }

      case "broken clouds": {
        return "/assets/images/icon/broken_clouds.png";
        break;
      }
      case "shower rain": {
        return "/assets/images/icon/shower_rain.png";
        break;
      }
      case "rain": {
        return "/assets/images/icon/rain.png";
        break;
      }
      case "rain night": {
        return "/assets/images/icon/Rain_night.png";
        break;
      }

      case "shower rain": {
        return "/assets/images/icon/shower_rain.png";
        break;
      }
      case "snow": {
        return "/assets/images/icon/snow.png";
        break;
      }

      case "mist": {
        return "/assets/images/icon/mist.png";
        break;
      }
      case "thunderstorm": {
        return "/assets/images/icon/thunderstorm.png";
        break;
      }
      case "cleat sky night": {
        return "/assets/images/icon/cleat_sky_night.png";
        break;
      }
      case "few clouds night": {
        return "/assets/images/icon/few-Clouds_night.png";
        break;
      }
      case "rain night": {
        return "/assets/images/icon/rain_night.png";
        break;
      }


      default: {
        return "/assets/images/icon/"+icon+".png";
        break;
      }
    }

  }

  public getCurrentDayValue(responceString):JSON
  {
    var returnValue={city:"",currentTemp:"",weather:"",wind:"",humidity:"",currentWeatherIcon:""};
    returnValue.city= JSON.parse(responceString).name+" , "+ JSON.parse(responceString).sys.country;
    returnValue.currentTemp = (JSON.parse(responceString).main).temp;
    returnValue.weather = (JSON.parse(responceString).weather)[0].description;
    returnValue.wind= (JSON.parse(responceString).wind).speed;
    returnValue.humidity= (JSON.parse(responceString).main).humidity + "%";
    returnValue.currentWeatherIcon=this.getWeatherBannerIconFromAssetFolder(JSON.parse(responceString).weather[0].description,JSON.parse(responceString).weather[0].icon);
    
    return JSON.parse(JSON.stringify(returnValue))
    
  }


}
