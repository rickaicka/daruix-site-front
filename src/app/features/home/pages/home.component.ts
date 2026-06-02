import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrxDividerComponent} from '../../../shared/components/drx-divider/drx-divider.component';
import {SharedModule} from '../../../shared/shared-module';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
