import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '6c1c431d91c84edaba6172630243005';
  private apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${this.apiKey}&q=`;

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}${city}`;
    return this.http.get(url);
  }
}


