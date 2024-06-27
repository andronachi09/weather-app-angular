import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchCity } from '../search-city';
import { CurrentWeather } from '../current-weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private locationsUrl = 'http://localhost:8080/locations';
  private currentWeatherUrl = 'http://localhost:8080/weather';

  constructor(private http: HttpClient) {}

  searchLocations(query: string): Observable<SearchCity[]> {
    return this.http.get<SearchCity[]>(`${this.locationsUrl}?q=${query}`);
  }

  searchCurrentWeather(lat: number, lon: number): Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(`${this.currentWeatherUrl}?lat=${lat}&lon=${lon}`)
  }
}
