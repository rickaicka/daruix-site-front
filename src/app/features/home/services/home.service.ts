import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) { }

  private readonly baseUrl = 'http://localhost:8000/api';


  getCompanies(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/empresas`);
  }
}
