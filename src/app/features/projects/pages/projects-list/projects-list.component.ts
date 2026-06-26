import {AfterViewInit, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {DatePipe, NgClass} from '@angular/common';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { SharedModule } from '../../../../shared/shared-module';
import { ClienteService } from '../../services/cliente.service';
import { ICliente } from '../../../../shared/interfaces/cliente.interface';
import { environment } from '../../../../../environments/environment';
import {
  LucideBuilding2,
  LucideCalendar,
  LucideFileX,
  LucideFolderOpen,
  LucideImage, LucideImageOff,
  LucideMapPin,
  LucideUsers
} from '@lucide/angular';
import Swal from 'sweetalert2';
import {DrxEmptyResponseComponent} from '../../../../shared/components/drx-empty-response/drx-empty-response.component';
import {Cliente} from '../../../../shared/models/cliente.model';
import {first} from 'rxjs';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [
    SharedModule,
    NgClass,
    LucideUsers,
    LucideMapPin,
    LucideCalendar,
    LucideBuilding2,
    DatePipe,
    LucideImage,
    RouterLink,
    DrxEmptyResponseComponent,
    LucideFolderOpen,
    LucideImageOff
  ],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent implements OnInit, AfterViewInit, OnDestroy {

  private clientsService = inject(ClienteService);
  private activatedRoute = inject(ActivatedRoute);

  clientsList: ICliente[] = [];
  projectsList: any[] = [];

  activeService?: string;
  activeSubService?: string;
  activeClienteClick = 1;
  private lightbox?: PhotoSwipeLightbox;
  env = environment;
  private clienteAtivo?: Cliente;
  private projetos?: any[];
  private isLoadingProjetos?: boolean;

  ngOnInit() {}

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe(params => {
      this.activeService = params['servico'];
      this.activeSubService = params['subservico'];
      this.getClientes();
      setTimeout(() => this.initGallery());
    });
  }

  getClientes() {
    this.clientsService.getClients({
      servico: this.activeService,
      segmento: this.activeSubService,
    }).subscribe(clients => {
      this.clientsList = clients;
    });
  }

  clientSelect(client: ICliente) {
    this.activeClienteClick = client.id;
    this.projectsList = [];
    this.getProjects(client.slug);
  }

  getProjects(cliente: string) {
    this.clientsService.getProjetosByClienteSlug(cliente)
      .subscribe({
        next: (projects: any[]) => {
          this.projectsList = projects.flatMap((projeto: any) =>
            projeto.unidades?.map((unidade: any) => ({
              ...unidade,

              projeto_id: projeto.id,
              projeto_nome: projeto.nome,
              projeto_slug: projeto.slug,
              cliente: projeto.cliente,
              cliente_slug: projeto.cliente_slug,

              imagens: unidade.imagens?.map((img: any) => ({
                ...img,
                imagem_url: img.imagem_url
              })) ?? []
            })) ?? []
          );

          setTimeout(() => this.initGallery());
        },

        error: () => {
          this.projectsList = [];

          Swal.fire({
            title: 'Erro!',
            text: 'Erro ao carregar projetos para o cliente selecionado!',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#C00D0E',
          });
        }
      });
  }

  initGallery() {
    this.lightbox?.destroy();
    this.lightbox = new PhotoSwipeLightbox({
      gallery: '.project-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    });

    this.lightbox.init();
  }

  ngOnDestroy() {
    this.lightbox?.destroy();
  }
}
