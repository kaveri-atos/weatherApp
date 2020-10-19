import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoryService } from '../../Services/repository-service.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create the component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create variable to use', () => {
    // expect(component.date).toBeUndefined;
    // expect(component.dateTempMax).toBeUndefined;
    // expect(component.dateTempMin).toBeUndefined;
    // expect(component.fiveDaysWeatherIcon).toBeUndefined;
    // expect(component.graphMaxMinFromTempDelta).toBeUndefined;
    expect(component.humidity).toBeUndefined;
    // expect(component.overLapGraphForWeatherPredictionServiceBck).toBeUndefined;
    // expect(component.overLapGraphForWeatherPredictionServiceMax).toBeUndefined;
    // expect(component.overLapGraphForWeatherPredictionServiceMin).toBeUndefined;
   // expect(component.repositoryyAPIService).toBeUndefined;
    // expect(component.temperatureConverterService).toBeUndefined;
    // expect(component.uIServiceService).toBeUndefined;
    // expect(component.uIToastService).toBeUndefined;
    expect(component.currentWeatherDesc).toBeUndefined;
    expect(component.wind).toBeUndefined;
    expect(component.currentTemp).toBeUndefined;
    expect(component.currentWeatherIcon).toBeUndefined;
    expect(component.precipitation).toBeUndefined;
    expect(component.weatherData).toBeUndefined;
    
    // expect(component.maxTempof5DaysToGrphLimit).toBeUndefined;
    // expect(component.minTempof5DaysToraphLimit).toBeUndefined; 
});
  it('Should call function to fetch data from URL', () => {

    let repo=fixture.debugElement.injector.get(RepositoryService); 
    expect(repo.getCurrentWeather("Kolkata")).toBeTruthy();
    expect(repo.getWeatherValueFiveDays("Kolkata")).toBeTruthy();
  });
});
