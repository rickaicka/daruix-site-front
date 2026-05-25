import {ICliente} from '../interfaces/cliente.interface';

export class Cliente{
  slug!: string;
  id!: number;
  nome!: string;

  constructor(data: ICliente) {
    Object.assign(this, data);
  }
}
