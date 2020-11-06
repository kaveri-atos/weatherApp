import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherBusinessLogicService {

  constructor() { }

  /**
   * 
   * @param responceString //reurn json object weather current value
   */
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

  /**
   * 
   * @param mWeatherType 
   * @param icon  return weather icon
   */
  public getWeatherBannerIconFromAssetFolder(mWeatherType: string,icon:string): string {

    switch (mWeatherType) {
      case "clear sky": {
        return "/assets/images/icon/Clear-sky.png";
        //break;
      }

      case "few clouds": {
        return "/assets/images/icon/Few-Clouds.png";
        //break;
      }
      case "few clouds night": {
        return "/assets/images/icon/Few-Clouds_night.png";
        //break;
      }

      case "scattered clouds": {
        return "/assets/images/icon/scattered-clouds.png";
        //break;
      }

      case "broken clouds": {
        return "/assets/images/icon/broken-clouds.png";
        //break;
      }
      case "shower rain": {
        return "/assets/images/icon/shower-rain.png";
        //break;
      }
      case "rain": {
        return "/assets/images/icon/rain.png";
        //break;
      }
      case "rain night": {
        return "/assets/images/icon/Rain_night.png";
        //break;
      }

      case "shower rain": {
        return "/assets/images/icon/shower-rain.png";
        //break;
      }
      case "snow": {
        return "/assets/images/icon/snow.png";
        //break;
      }

      case "mist": {
        return "/assets/images/icon/mist.png";
        //break;
      }
      case "thunderstorm": {
        return "/assets/images/icon/thunderstorm.png";
        //break;
      }
      case "cleat sky night": {
        return "/assets/images/icon/Cleat-sky_night.png";
        //break;
      }
      case "few clouds night": {
        return "/assets/images/icon/Few-Clouds_night.png";
        //break;
      }
      case "rain night": {
        return "/assets/images/icon/Rain_night.png";
        //break;
      }


      default: {
        return "/assets/images/icon/"+icon+".png";
        //break;
      }
    }

  }
}
