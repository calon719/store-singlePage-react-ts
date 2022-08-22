const { VITE_API_HOSTNAME, VITE_API_PATH } = import.meta.env

const baseUrl = `${VITE_API_HOSTNAME}/api/livejs/v1/customer/${VITE_API_PATH}`
const API = {
  PRODUCTS_API: `${baseUrl}/products`,
  CARTS_API: `${baseUrl}/carts`,
  ORDER_API: `${baseUrl}/orders`
}

export default API
