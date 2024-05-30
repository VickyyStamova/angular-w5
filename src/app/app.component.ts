import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WeatherComponent],
  template: `
    <h1>Weather App</h1>
    <app-weather></app-weather>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
