import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Contato} from '../../../shared/models/contato.model';
import {IContatoResponse} from '../../../shared/interfaces/contato.interface';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  constructor(private httpClient: HttpClient) { }


  env = environment;

  sendEmail(opt: Contato) {
    return this.httpClient.post<IContatoResponse>(
      `${this.env.API_URL}/contatos/`,
      opt
    );
  }

}
