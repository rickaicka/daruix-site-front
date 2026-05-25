import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {DatePipe, NgClass} from '@angular/common';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import { SharedModule } from '../../../../shared/shared-module';
import { ClienteService } from '../../services/cliente.service';
import { ICliente } from '../../../../shared/interfaces/cliente.interface';
import { environment } from '../../../../../environments/environment';
import {LucideBuilding2, LucideCalendar, LucideImage, LucideMapPin, LucideUsers} from '@lucide/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [SharedModule, NgClass, LucideUsers, LucideMapPin, LucideCalendar, LucideBuilding2, DatePipe, LucideImage, RouterLink],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent implements OnInit, AfterViewInit {

  private clientsService = inject(ClienteService);
  private activatedRoute = inject(ActivatedRoute);

  clientsList: ICliente[] = [];
  projectsList: any[] = [];

  activeService?: string;
  activeSubService?: string;
  activeClienteClick = 1;

  env = environment;

  ngOnInit() {}

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe(params => {
      this.activeService = params['servico'];
      this.activeSubService = params['subservico'];
      this.getClientes();
    });
  }

  getClientes() {
    this.clientsService.getClients({
      servico: this.activeService,
      segmento: this.activeSubService
    }).subscribe(clients => {
      this.clientsList = clients.results;
    });
  }

  clientSelect(client: ICliente) {
    this.activeClienteClick = client.id;
    this.getProjects(client.slug);
  }

  getProjects(cliente: string) {
    this.clientsService.getProjetosByServico(cliente).subscribe(projects => {
      this.projectsList = projects.map((projeto: any) => ({
        ...projeto,
        imagens: projeto.imagens.map((img: any) => ({
          ...img,
          imagem_url: img.imagem_url
        }))
      }));

      setTimeout(() => this.initGallery());
    }, error => {
      console.log(error);
      Swal.fire({
        title: 'Erro!',
        text: 'Sem projetos para o cliente selecionado!',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#C00D0E',
      });
    });
  }

  initGallery() {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '.project-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    });

    lightbox.init();
  }
}
