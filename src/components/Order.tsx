import Title from './Title'
import OrderForm from './OrderForm'

type orderProps = {
  fetchCartData: Function;
}

function Order({ fetchCartData }: orderProps) {
  return (
    <div id="order" className="container pt-15 pb-20">
      <Title title={'填寫預訂資料'} />
      <OrderForm fetchCartData={fetchCartData} />
    </div>
  )
}

export default Order
