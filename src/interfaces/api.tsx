
export interface VendasInterface {
  id: number,
  total: number,
  produtosId: Array<ProdutosInterface>,
  created_at: string,
}

export interface ProdutosInterface {
  id: number,
  preco: number,
  nome: string,
}