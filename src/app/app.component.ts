import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchCity } from './search-city';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <app-search-bar></app-search-bar>
    </main>
  `,
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FormsModule, CommonModule, SearchBarComponent],
})
export class AppComponent {
  title = 'weather-app';
  locations: SearchCity[] = [];
  searchQuery: string = '';

  constructor(private weatherService: WeatherService) {}


}
