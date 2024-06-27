import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        title: 'Home page'
    },
    {
        path: 'details/:lat/:lon',
        component: WeatherDetailsComponent,
        title: 'Details Page'
    }
];
