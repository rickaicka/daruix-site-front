import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) { }

  env = environment

  getServices(): Observable<any> {
    return this.httpClient.get<any>(`${this.env.API_URL}/servicos`);
  }
}
