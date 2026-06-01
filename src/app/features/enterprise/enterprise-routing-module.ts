import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from '../projects/pages/projects.component';
import {EnterpriseComponent} from './pages/enterprise.component';

const routes: Routes = [
  { path: '', component: EnterpriseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule { }
