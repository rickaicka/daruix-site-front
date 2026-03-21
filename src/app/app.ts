import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DrxHeader} from './drx-header/drx-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrxHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('daruix-site-front');
}
