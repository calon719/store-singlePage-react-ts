import { useState, useEffect } from 'react'
import CartTableItem from './CartTableItem'
import { TCarts } from './../global/cartDataType'
import API from './../global/constracts'

type cartTableProps = {
  carts: TCarts;
  setCartData: Function;
}

function CartTable({ carts, setCartData }: cartTableProps) {
  const [cartStatus, setCartStatus] = useState(false)
  const [cartItems, setCartItems] = useState<Array<JSX.Element>>([])

  useEffect(() => {
    if (carts.carts.length) {
      setCartStatus(true)
    } else {
      setCartStatus(false)
    }

    const items = carts.carts.map(cart => <CartTableItem key={cart.id} cart={cart} setCartData={setCartData} />)
    setCartItems(items)
  }, [carts])

  async function deleteAllCarts() {
    const { CARTS_API } = API
    const res = await fetch(CARTS_API, { method: 'DELETE' })
    const json = await res.json()
    if (json.status) {
      setCartData(json)
    }
  }

  return (
    <>
      <p className={`text-2xl text-center py-16 ${ cartStatus ? 'hidden' : '' }`}>
        尚未加入購物車
      </p>
      <div className="overflow-auto">
        <table className={`min-w-230 text-xl mx-auto ${ cartStatus ? '' : 'hidden' }`}>
          <thead className="text-left">
            <tr>
              <th className="font-normal">品項</th>
              <th className="font-normal">單價</th>
              <th className="font-normal">數量</th>
              <th className="font-normal">金額</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cartItems}
          </tbody>
          <tfoot>
            <tr>
              <td className="pt-5">
                <button
                  type="button"
                  className="border rounded border-black py-3 px-5 hover:text-white hover:bg-black transition-colors"
                  onClick={deleteAllCarts}
                >
                  刪除所有品項
                </button>
              </td>
              <td colSpan={2} />
              <td className="pt-5">
                總金額
              </td>
              <td className="text-3xl pt-5">
                NT$ {carts.finalTotal.toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

    </>
  )
}

export default CartTable
