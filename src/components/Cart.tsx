import Title from './Title'
import CartTable from './CartTable'
import { TCarts } from './../global/cartDataType'

type cartProps = {
  carts: TCarts;
  setCartData: Function;
}

function Cart({ carts, setCartData }: cartProps) {
  return (
    <div id="cart" className="bg-gray-300">
      <div className="container pt-12 pb-17">
        <Title title={'我的購物車'} />
        <CartTable carts={carts} setCartData={setCartData} />
      </div>
    </div>
  )
}

export default Cart
