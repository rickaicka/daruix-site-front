import {Contato} from '../models/contato.model';

export interface IContato {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}
export interface IContatoResponse {
  success: boolean;
  message: string;
  data?: Contato;
}
