import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from '../current-weather';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css',
})
export class WeatherDetailsComponent implements OnInit {
  lat!: number;
  lon!: number;
  weatherDetails!: CurrentWeather

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.lat = +param['lat'];
      this.lon = +param['lon'];
      this.fetchWeatherDetails();
    })
  }

  fetchWeatherDetails(): void {
    this.weatherService.searchCurrentWeather(this.lat, this.lon).subscribe(
      (data: CurrentWeather) => {
        this.weatherDetails = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
