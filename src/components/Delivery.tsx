import Title from './Title'
import MultiSteps from './MultiSteps'
import Products from './Products'
import { TCarts } from './../global/cartDataType'

type deliveryProps = {
  fetchCartData: Function;
  carts: TCarts;
}

function Delivery({ fetchCartData, carts }: deliveryProps) {
  return (
    <>
      <div id="delivery" className="container px-4 md:px-0 pt-8 pb-15">
        <div className="mb-18">
          <Title title={'運送方式'} />
          <MultiSteps />
        </div>
        <Products fetchCartData={fetchCartData} carts={carts} />
      </div>
    </>
  )
}

export default Delivery
