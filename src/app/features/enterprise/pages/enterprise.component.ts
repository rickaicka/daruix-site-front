import {Component, inject, OnInit} from '@angular/core';
import {LucideBuilding2, LucideCompass, LucideGem, LucideUsers} from '@lucide/angular';
import {HomeService} from '../../home/services/home.service';
import {Empresa} from '../../../shared/models/enterprise.model';
import {IEmpresa} from '../../../shared/interfaces/enterprise.interface';

@Component({
  selector: 'app-enterprise',
  imports: [
    LucideUsers,
    LucideBuilding2,
    LucideCompass,
    LucideGem
  ],
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.scss',
})
export class EnterpriseComponent implements OnInit {

  private homeService = inject(HomeService)
  empresaInfo: Empresa = new Empresa();

  ngOnInit() {
    this.getEnterpriseInfo();
  }


  getEnterpriseInfo(){
    this.homeService.getCompanies().subscribe(dt => {
      this.empresaInfo = dt.results[0];
    })
  }

}
