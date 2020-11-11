import { Component } from '@angular/core';
import { EnvironmentService } from './services/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  constructor(private env : EnvironmentService){
    console.log("Environment selected : "+JSON.stringify(env.envConfig))
  }
}
