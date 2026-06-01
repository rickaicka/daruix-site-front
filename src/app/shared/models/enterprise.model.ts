import {IEmpresa} from '../interfaces/enterprise.interface';

export class Empresa{
  descricao = '';
  endereco = '';
  id = 0;
  missao = '';
  nome = '';
  telefone = '';
  valores = '';

  constructor(data?: Partial<IEmpresa>) {
    Object.assign(this, data);
  }
}
