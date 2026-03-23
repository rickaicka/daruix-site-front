import {Component, inject, OnInit} from '@angular/core';
import {HomeService} from '../../../features/home/services/home.service';

@Component({
  selector: 'app-drx-footer',
  imports: [],
  templateUrl: './drx-footer.html',
  styleUrl: './drx-footer.scss',
})
export class DrxFooter implements OnInit{

  private homeService = inject(HomeService);
  public empresa: any;

  ngOnInit() {
    this.homeService.getCompanies().subscribe(data => {
      this.empresa = data.results[0];
    });
  }
}
