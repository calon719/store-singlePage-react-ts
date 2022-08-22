import productsDataType from './../global/productsDataType'
import ProductItem from './ProductItem'

type productsListProps = {
  products: Array<productsDataType>;
}

function ProductsList({ products }: productsListProps) {
  const items = products.map(product => <ProductItem key={product.id} product={product} />)
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
      {items}
    </ul>
  )
}

export default ProductsList