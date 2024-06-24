import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchCity } from '../search-city';

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  private locationsUrl = 'http://localhost:8080/locations';

  constructor(private http: HttpClient) { }

   searchLocations(query: string): Observable<SearchCity[]> {
    return this.http.get<SearchCity[]>(`${this.locationsUrl}?q=${query}`)
  }
}
