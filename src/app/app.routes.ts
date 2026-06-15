import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/pages/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'servicos',
    loadComponent: () =>
      import('./features/projects/pages/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'servicos/:servico/subservicos/:subservico',
    loadComponent: () =>
      import('./features/projects/pages/projects-list/projects-list.component')
        .then(m => m.ProjectsListComponent),
  },
  {
    path: 'clientes',
    loadComponent: () =>
      import('./features/clients/pages/clients.component').then(m => m.ClientsComponent),
  },
  {
    path: 'empresa',
    loadComponent: () =>
      import('./features/enterprise/pages/enterprise.component').then(m => m.EnterpriseComponent),
  },
  {
    path: 'contato',
    loadComponent: () =>
      import('./features/contato/pages/contato.component').then(m => m.ContatoComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
