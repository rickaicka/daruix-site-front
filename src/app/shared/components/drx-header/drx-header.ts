import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-drx-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './drx-header.html',
  styleUrl: './drx-header.scss',
})
export class DrxHeader {

}
