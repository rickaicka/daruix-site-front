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
      import('./features/projects/pages/projects.component').then(m => m.ProjectsComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
