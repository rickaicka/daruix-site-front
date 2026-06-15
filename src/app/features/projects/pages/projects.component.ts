import {Component, inject, OnInit} from '@angular/core';
import {SharedModule} from '../../../shared/shared-module';
import {NgClass} from '@angular/common';
import {ProjectsService} from '../services/projects.service';
import {Servico} from '../../../shared/models/servico.model';
import {SubServico} from '../../../shared/interfaces/servico.interface';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-projects',
  imports: [
    SharedModule,
    NgClass,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit{

  private projectsService = inject(ProjectsService)
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  activeServiceClick: number = 1;
  servicesList: Array<Servico> = [];
  subServicesList: Array<SubServico> = [];
  activeService: Servico | undefined;
  selectedServiceSlug: string | null = null;
  selectedServiceOrder: number | null = null;
  selectedServiceTitle: string | null = null;


  ngOnInit(): void {
    const state = history.state;
    this.selectedServiceSlug = state?.slug ?? null;
    this.selectedServiceOrder = state?.orderService ?? null;
    this.selectedServiceTitle = state?.title ?? null;
    this.getServices();
  }

  getServices(): void {
    this.projectsService.getServices().subscribe(data => {
      this.servicesList = data.results;

      if (this.selectedServiceSlug) {
        const serviceFromHome = this.servicesList.find(service =>
          service.ordem === this.selectedServiceOrder
        );

        if (serviceFromHome) {
          this.serviceTypeActive(serviceFromHome);
          return;
        }
      }

      this.serviceTypeActive(this.servicesList[0]);
    });
  }

  serviceTypeActive(service: Servico): void {
    this.activeServiceClick = service.id;
    this.activeService = service;
  }

  goToSubService(subServico: SubServico): void {
    this.router.navigate([
      '/servicos',
      subServico?.servico_slug,
      'subservicos',
      subServico?.segmento_slug,
    ]);
  }
}
