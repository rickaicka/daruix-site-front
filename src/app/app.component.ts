import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrxHeader } from './shared/components/drx-header/drx-header';
import {DrxFooter} from './shared/components/drx-footer/drx-footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrxHeader, DrxFooter],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected readonly title = signal('daruix-site-front');
}
