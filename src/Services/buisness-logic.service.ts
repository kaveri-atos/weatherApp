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
  /**
  * Get image path from weather description string 
  * @param weatherType 
  * @returns Image local path 
  */
 public getWeatherForcastIconFromAssetFolder(weatherType: string): string {

  switch (weatherType) {
   
    case "01d": {
      return "../../assets/icon/01d.png";
      break;
    }
    case "01n": {
      return "../../assets/icon/01n.png";
      break;
    }

    case "02d": {
      return "../../assets/icon/02d.png";
      break;
    }
    case "02n": {
      return "../../assets/icon/02n.png";
      break;
    }
    case "03d": {
      return "../../assets/icon/03d.png";
      break;
    }

    case "04d": {
      return "../../assets/icon/04d.png";
      break;
    }
    case "09d": {
      return "../../assets/icon/09d.png";
      break;
    }
    case "10d": {
      return "../../assets/icon/10d.png";
      break;
    }
    case "10n": {
      return "../../assets/icon/10n.png";
      break;
    }
    case "11d": {
      return "../../assets/icon/11d.png";
      break;
    }
    case "13d": {
      return "../../assets/icon/13d.png";
      break;
    }
    case "50d": {
      return "../../assets/icon/50d.png";
      break;
    }
    default: {
      return "../../assets/icon/01d.png";
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

  /**
 * Get Occurance of date
 * @param fiveDaysValue Json value
 *  @returns Occurance of date
 */
  public getNoOfDays(fiveDaysValue){
    var weatherDate = [];
    for (let i = 0; i < JSON.parse(fiveDaysValue).list.length; i++) {
      console.log(JSON.parse(fiveDaysValue).list[i]);
      var weatherDateAfterAplit = (JSON.parse(fiveDaysValue).list[i].dt_txt).split(" ")[0];   
      weatherDate.indexOf(weatherDateAfterAplit) === -1 ? weatherDate.push(weatherDateAfterAplit) : console.log();
    }
    return weatherDate;
  }

  /**
 * Return Day of Week
 * @param mDate Dates in YYYY-MM-DD format
 * @returns Day of Week
 */
public getDayOfWeek(dateInDay){
  var formatedDate=[];
 var dayNames = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 formatedDate.push("Today");
 let k=dateInDay+1;
  for (let i=0;i<6;i++){
      if(k==7){
          k=0;
      }
      else{
        formatedDate.push(dayNames[k++]);
      }
  } 

return formatedDate;
}

/**
 *  Return as 'DD Month Name' format 
 * @param weatherDate Dates in YYYY-MM-DD format
 * @returns Formated date and month
 */
public formatDateForDateAndMonth(weatherDate){
  var mFormatedDate=[];
  var monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
  for (let i = 0; i < weatherDate.length; i++) {
  mFormatedDate.push(weatherDate[i].split("-")[2]+" "+monthNames[parseInt(weatherDate[i].split("-")[1])-1]);
  }
      return mFormatedDate;
}

/**
 * Get morethan one days forcast
 * @param weatherDate Days in YYYU-MM-DD format
 * @param fiveDaysValue Json value
 * @returns Get Five days value to render graph
 */
public getFiveDaysValueInFormat(weatherDate,fiveDaysValue){
  var dateTempMax = [];
  var dateTempMin = [];
  var fiveDaysWeatherIcon=[];

  var totlReturn=[];
        /////// getHigh Log Temp Of Each Day /////
        for (let i = 0; i < weatherDate.length; i++) {
          console.log(weatherDate[i]);

          var heigh = 0;
          var low = 0;
          var weatherIcon="";

          for (let j = 0; j < JSON.parse(fiveDaysValue).list.length; j++) {
            var mDateAfterAplit = (JSON.parse(fiveDaysValue).list[j].dt_txt).split(" ")[0];
            if (mDateAfterAplit == weatherDate[i]) {
              if (heigh == 0 && low == 0) {
                heigh = JSON.parse(fiveDaysValue).list[j].main.temp_max;
                weatherIcon=this.getWeatherForcastIconFromAssetFolder(JSON.parse(fiveDaysValue).list[j].weather[0].icon);
                low = JSON.parse(fiveDaysValue).list[j].main.temp_min;
                continue;
              }
              else {
                if (heigh < JSON.parse(fiveDaysValue).list[j].main.temp_max) {
                  heigh = JSON.parse(fiveDaysValue).list[j].main.temp_max;
                  weatherIcon=this.getWeatherForcastIconFromAssetFolder(JSON.parse(fiveDaysValue).list[j].weather[0].icon);
                }
                if (low > JSON.parse(fiveDaysValue).list[j].main.temp_min) {
                  low = JSON.parse(fiveDaysValue).list[j].main.temp_min;
                }
              }

            }

          }

          dateTempMax.push(Math.floor(heigh));
          dateTempMin.push(Math.floor(low));
          fiveDaysWeatherIcon.push(weatherIcon);

          // console.log(this.mTemperatureConverterService.kelvinToCelcius(heigh)
          //   + "     " + this.mTemperatureConverterService.kelvinToCelcius(low));


        }

        totlReturn.push(dateTempMax);
        totlReturn.push(dateTempMin);
        totlReturn.push(fiveDaysWeatherIcon);

        return totlReturn;
}

}
