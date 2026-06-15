export interface IServico{
  id: number,
  nome: string,
  slug: string,
  descricao: string,
  ordem: number,
  subservicos: Array<SubServico>,
}

export type SubServico = {
  id: number,
  segmento: string,
  ordem: number,
  segmento_slug: string,
  servico: string,
  servico_slug: string,
  capa: string
}
