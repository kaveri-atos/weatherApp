import { Injectable } from '@angular/core';
import * as Chart from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class OverLapGraphForWeatherPredictionService {

  constructor() { }

  /**
 * Show Weather Graph
 * @param {Chart} lineChart Chart object
 * @param lineCanvas Canvas object
 * @param weatherDate Date array
 * @param dateTemp Minumun temprature
 * @param label For hoover
 * @param color Fill color of graph
 * @param yAxisMin Minimum temprature of graph
 * @param yAxisMax Minimum temprature of graph
 */
public showGraph(lineChart,lineCanvas,weatherDate,dateTemp,label,color,yAxisMin,yAxisMax) {
  
  var nativele = lineCanvas.nativeElement;
  
  lineChart = new Chart(lineCanvas.nativeElement,
    {
      options: {
        legend: {
          display: false
        },
        hover: {
          animationDuration: 0
        },
        animation: {
          onComplete: function () {
            const chartInstance = this.chart,
              ctx = chartInstance.ctx;

            ctx.font = Chart.helpers.fontString(
              8,
              Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily
            );
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
             ctx.font = "11px verdana";
           
          
            this.data.datasets.forEach(function (dataset, i) {
              const meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                const data = dataset.data[index];
                if(label=="Highest"){
                  if(index!=5)
                    ctx.fillText(data, bar._model.x +10, bar._model.y - 2);
                  else
                  ctx.fillText(data, bar._model.x -6, bar._model.y - 2);
                }
                if(label=="Lowest"){
                  if(index!=5)
                    ctx.fillText(data, bar._model.x +10, bar._model.y +14);
                  else
                  ctx.fillText(data, bar._model.x -6, bar._model.y +14);
                }

              });
            });
          }
        },
        tooltips: {
          enabled: false
        },
        responsive: true, 
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                drawOnChartArea: false
              },
              ticks: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                drawOnChartArea: false,
                display: false
              },
              ticks: {
                // beginAtZero: true,
                min: yAxisMin,
                max: yAxisMax,
                display: false
              }
            }
          ]
        }
      },
      type: 'line',
      data: {
        labels: weatherDate,
        datasets: [

          {
            label: label,
            fill: true,
            lineTension: 0.1,
            backgroundColor: color,
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            borderWidth:'1',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dateTemp,
            spanGaps: false,
          }

        ]
      }
    });





}

}
