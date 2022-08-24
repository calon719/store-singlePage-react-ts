import productDataType from './../global/productsDataType'

type TCart = {
  id: string;
  quantity: number;
  product: productDataType;
}

type TCarts = {
  finalTotal: number;
  total?: number;
  status?: boolean;
  carts: Array<TCart>;
  message?: string;
}

export type { TCarts, TCart }
