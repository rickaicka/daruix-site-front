import {SubServico} from '../interfaces/servico.interface';
import {IProjeto} from '../interfaces/projeto.interface';

export class Projeto{
  id!: number;
  nome!: string;
  slug!: string;
  cliente!: string;
  cliente_slug!: string;
  capa!: any;
  destaque!: boolean;
  subservicos!: Array<SubServico>

  constructor(data: IProjeto) {
    Object.assign(this, data);
  }
}
