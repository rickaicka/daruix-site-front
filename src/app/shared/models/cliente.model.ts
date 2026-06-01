import {ICliente} from '../interfaces/cliente.interface';

export class Cliente{
  slug!: string;
  id!: number;
  nome!: string;
  since_date!: string;

  constructor(data: ICliente) {
    Object.assign(this, data);
  }
}
