import { useState, useEffect } from 'react'
import API from './global/constracts'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Comparison from './components/Comparison'
import Comments from './components/Comments'
import Delivery from './components/Delivery'
import Cart from './components/Cart'
import Order from './components/Order'

function App() {
  const [cartData, setCartData] = useState({ carts: [], finalTotal: 0 })

  async function fetchCartData() {
    const { CARTS_API } = API
    const res = await fetch(CARTS_API)
    const json = await res.json()

    setCartData(json)
  }

  useEffect(() => {
    fetchCartData()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Comparison />
      <Comments />
      <Delivery fetchCartData={fetchCartData} carts={cartData} />
      <Cart carts={cartData} setCartData={setCartData} />
      <Order fetchCartData={fetchCartData} />
    </>
  )
}

export default App
