import {IServico, SubServico} from '../interfaces/servico.interface';

export class Servico implements IServico {
  descricao!: string;
  id!: number;
  nome!: string;
  ordem!: number;
  subservicos!: Array<SubServico>;

  constructor(data: IServico) {
    Object.assign(this, data);
  }
}
