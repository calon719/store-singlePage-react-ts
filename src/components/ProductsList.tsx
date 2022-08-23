import productDataType from './../global/productsDataType'
import ProductItem from './ProductItem'
import { TCarts } from './../global/cartDataType'

type productsListProps = {
  products: Array<productDataType>;
  fetchCartData: Function;
  carts: TCarts;
}

function ProductsList({ products, fetchCartData, carts }: productsListProps) {
  const items = products
  .map(product => <ProductItem key={product.id} product={product} fetchCartData={fetchCartData} carts={carts} />)
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
      {items}
    </ul>
  )
}

export default ProductsList
