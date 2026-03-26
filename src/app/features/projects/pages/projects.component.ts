import {Component, inject, OnInit} from '@angular/core';
import {SharedModule} from '../../../shared/shared-module';
import {NgClass} from '@angular/common';
import {ProjectsService} from '../services/projects.service';
import {Servico} from '../../../shared/models/servico.model';
import {SubServico} from '../../../shared/interfaces/servico.interface';

@Component({
  selector: 'app-projects',
  imports: [
    SharedModule,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit{

  private projectsService = inject(ProjectsService)
  activeServiceClick: number = 1;
  servicesList: Array<Servico> = [];
  subServicesList: Array<SubServico> = [];
  activeService: Servico | undefined;


  ngOnInit() {
    this.getServices();
  }

  serviceTypeActive(service: Servico) {
    this.activeServiceClick = service?.id;
    this.activeService = service;
  }
  getServices(){
    this.projectsService.getServices().subscribe(data => {
      this.servicesList = data.results;
      if(!this.activeService){
        this.activeServiceClick = this.servicesList[0].id;
        this.activeService = this.servicesList[0];
      }
    })
  }
}
