import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrxHeader } from './shared/components/drx-header/drx-header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrxHeader],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('daruix-site-front');
}
