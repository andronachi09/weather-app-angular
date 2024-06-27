import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.component.css',
  imports: [RouterOutlet],
})
export class AppComponent {}
