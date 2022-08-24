import { useState } from 'react'
import API from './../global/constracts'

type TOrderData = {
  [key: string]: string;
}

type orderFormProps = {
  fetchCartData: Function;
}

function OrderForm({ fetchCartData }: orderFormProps) {
  console.log(fetchCartData)
  const [orderData, setOrderData] = useState<TOrderData>({
    name: '',
    tel: '',
    email: '',
    address: '',
    payment: 'ATM'
  })

  function inputContent(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target

    const newData: TOrderData = {
      ...orderData
    }
    newData[id] = value
    setOrderData(newData)
  }

  function changeContent(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value, id } = e.target

    const newData: TOrderData = {
      ...orderData
    }
    newData[id] = value
    setOrderData(newData)
  }

  async function submitOrder(e: React.FormEvent) {
    e.preventDefault()
    const { ORDER_API } = API
    const res = await fetch(ORDER_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: { user: orderData } })
    })
    const json = await res.json()
    if (json.status) {
      setOrderData({
        name: '',
        tel: '',
        email: '',
        address: '',
        payment: 'ATM'
      })
      fetchCartData()
    }
  }

  return (
    <form className="w-full sm:w-[350px] mx-auto" onSubmit={submitOrder}>
      <div className="mb-5">
        <label className="mb-2" htmlFor="name">姓名</label>
        <input
          id="name"
          className="py-2 px-3 border rounded w-full"
          type="text"
          placeholder="請輸入姓名"
          onInput={inputContent}
          value={orderData.name}
        />
      </div>
      <div className="mb-5">
        <label className="mb-2" htmlFor="tel">電話</label>
        <input
          id="tel"
          className="py-2 px-3 border rounded w-full"
          type="tel"
          placeholder="請輸入電話"
          onInput={inputContent}
          value={orderData.tel}
        />
      </div>
      <div className="mb-5">
        <label className="mb-2" htmlFor="email">Email</label>
        <input
          id="email"
          className="py-2 px-3 border rounded w-full"
          type="email"
          placeholder="請輸入 Email"
          onInput={inputContent}
          value={orderData.email}
        />
      </div>
      <div className="mb-5">
        <label className="mb-2" htmlFor="address">寄送地址</label>
        <input
          id="address"
          className="py-2 px-3 border rounded w-full"
          type="text"
          placeholder="請輸入寄送地址"
          onInput={inputContent}
          value={orderData.address}
        />
      </div>
      <div className="mb-12">
        <label className="mb-2" htmlFor="payment">交易方式</label>
        <select
          id="payment"
          className="w-full bg-white border rounded py-2 px-3 hover:cursor-pointer"
          value={orderData.payment}
          onChange={changeContent}
        >
          <option value="" disabled>請選擇交易方式</option>
          <option value="ATM">ATM</option>
          <option value="信用卡">信用卡</option>
          <option value="貨到付款">貨到付款</option>
        </select>
      </div>
      <div className="text-center">
        <input
          type="submit"
          value="送出預訂資料"
          className="text-white text-xl bg-black py-3 px-17 rounded hover:cursor-pointer hover:opacity-75"
        />
      </div>
    </form>
  )
}

export default OrderForm
