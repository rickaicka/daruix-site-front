import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {Projeto} from '../../../shared/models/projeto.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private httpClient: HttpClient) { }

  env = environment

  getClients(params?: any): Observable<any> {
    return this.httpClient.get<any>(`${this.env.API_URL}/clientes`, {params});
  }

  getProjetosByCliente(cliente: any, params?: any): Observable<any> {
    return this.httpClient.get<any>(`${this.env.API_URL}/clientes/${cliente}/projetos`, {params});
  }

  getProjetosByServico(servico: any, params?: any): Observable<any> {
    return this.httpClient.get<any>(`${this.env.API_URL}/projetos/${servico}/unidades`, {params});
  }
  getProjetosByClienteSlug(clienteSlug: string) {
    return this.httpClient.get<Projeto[]>(
      `${this.env.API_URL}/clientes/${clienteSlug}/projetos/`
    );
  }
}
