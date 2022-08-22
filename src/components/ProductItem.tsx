import productsDataType from './../global/productsDataType'

type productItemProps = {
  product: productsDataType;
}

function ProductItem({ product }: productItemProps) {
  return (
    <li>
      <div
        className="h-[302px] w-full bg-no-repeat bg-center bg-cover relative"
        style={{ backgroundImage: `url(${product.images})` }}
      >
        <div className="bg-black px-6 py-2 absolute right-[-.5rem] top-2 text-white text-xl">
          新品
        </div>
      </div>
      <button
        className="bg-black text-white text-center mb-2 w-full py-3 hover:opacity-70"
        type="button"
      >加入購物車</button>
      <p className="text-xl">{product.title}</p>
      <p className="text-xl line-through">NT${product.origin_price.toLocaleString()}</p>
      <p className="text-3xl">NT${product.price.toLocaleString()}</p>
    </li>
  )
}

export default ProductItem