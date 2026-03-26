export interface IServico{
  id: number,
  nome: string,
  descricao: string,
  ordem: number,
  subservicos: Array<SubServico>
}

export type SubServico = {
  id: number,
  nome: string,
  ordem: number
}
