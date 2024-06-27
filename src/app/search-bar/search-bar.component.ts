import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCity } from '../search-city';
import { WeatherService } from '../services/weather.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  locations: SearchCity[] = [];
  searchQuery: string = '';

  constructor(private weatherService: WeatherService) {}

  searchLocation(): void {
    if (this.searchQuery.trim()) {
      this.weatherService.searchLocations(this.searchQuery).subscribe(
        {
          next: (data: SearchCity[]) => {
            this.locations = data
            console.log(this.locations);
          },
          error: (error) => (
            (console.error(error))
          ),
          complete: () => {
            console.log("alio suka")
          }
        }
      );
    }
  }
}
