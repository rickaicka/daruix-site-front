import {SubServico} from './servico.interface';

export interface IProjeto {
  "id": number,
  "nome": string,
  "slug": string,
  "cliente": string,
  "cliente_slug": string,
  "capa": any,
  "destaque": boolean,
  "subservicos": Array<SubServico>
}

