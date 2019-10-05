import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../display.service';
import { Weather } from '../weather';
import { WeatherResponse } from '../weather';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(
    private weatherService: WeatherService) { }

    private weatherResponse: Weather[] = [];
    // private weather: Weather = null;
    private locals: Weather = null;

    getLocals(): void {
      this.weatherService.getLocals().subscribe((response) => {
        console.log(response);
        // this.locals = response{};
      })
    }
  

  ngOnInit() {

  this.getLocals();

    // this.weather = {
    //   location: 37.8267,-122.4233,
    //   temperature: []
    // };
  }

}
