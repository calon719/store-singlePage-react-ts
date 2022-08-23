import productDataType from './../global/productsDataType'
import API from './../global/constracts'
import { TCarts } from './../global/cartDataType'

type productItemProps = {
  product: productDataType;
  fetchCartData: Function;
  carts: TCarts;
}

function ProductItem({ product, fetchCartData, carts }: productItemProps) {
  async function addCart() {
    const cart = carts.carts.find(cart => cart.product.id === product.id)
    let method = 'POST'
    let productId = product.id

    type TCartData = {
      productId?: string;
      id?: string;
      quantity: number;
    }

    const data: TCartData = {
      quantity: 1
    }

    if (cart) {
      method = 'PATCH'
      data.quantity += cart.quantity
      data.id = cart.id
    } else {
      data.productId = product.id
    }

    const { CARTS_API } = API
    const res = await fetch(CARTS_API, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    })

    const json = await res.json()

    if (json.status) {
      fetchCartData()
    }
  }

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
        onClick={addCart}
      >加入購物車</button>
      <p className="text-xl">{product.title}</p>
      <p className="text-xl line-through">NT${product.origin_price.toLocaleString()}</p>
      <p className="text-3xl">NT${product.price.toLocaleString()}</p>
    </li>
  )
}

export default ProductItem
