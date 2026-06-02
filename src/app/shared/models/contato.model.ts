
import {IContato} from '../interfaces/contato.interface';

export class Contato{
  nome= '';
  email= '';
  telefone= '';
  mensagem= '';

  constructor(data?: Partial<IContato>) {
    Object.assign(this, data);
  }
}
