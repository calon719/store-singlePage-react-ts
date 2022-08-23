import API from './../global/constracts'
import { TCart } from './../global/cartDataType'

type CartTableItemProps = {
  cart: TCart;
  setCartData: Function;
}

function CartTableItem({ cart, setCartData }: CartTableItemProps ) {
  const { product } = cart

  async function delProduct() {
    const { CARTS_API } = API
    const res = await fetch(`${CARTS_API}/${cart.id}`, { method: 'DELETE' })
    const json = await res.json()

    if (json.status) {
      setCartData(json)
    }
  }

  return (
    <tr className="border-b border-gray-500">
      <td className="py-5 flex pr-4 items-center">
        <img className="w-20 aspect-square" src={product.images} alt={product.title} />
        <h3 className="ml-4">{product.title}</h3>
      </td>
      <td className="py-5" width="150">NT$ {product.price.toLocaleString()}</td>
      <td className="py-5" width="100">{cart.quantity}</td>
      <td className="py-5" width="150">NT$ {product.price.toLocaleString()}</td>
      <td className="text-center py-5">
        <button type="button" onClick={delProduct}>
          <i className="bi bi-x-lg text-2xl hover:opacity-50" />
        </button>
      </td>
    </tr>
  )
}

export default CartTableItem
