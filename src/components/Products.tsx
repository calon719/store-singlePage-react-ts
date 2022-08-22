import { useState, useEffect } from 'react'
import CategorySelector from './CategorySelector'
import ProductsList from './ProductsList'
import API from './../global/constracts'
import productsDataType from './../global/productsDataType'

function Products() {
  const [productsData, setProductsData] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState<Array<string>>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('全部')

  function renderCategorySelector(data: Array<productsDataType>) {
    const categoriesList: Array<string> = []

    data.forEach(product => {
      const { category } = product
      const check = categoriesList.includes(category)
      if (!check) {
        categoriesList.push(category)
      }
    })

    setCategories(categoriesList)
  }

  async function fetchProductsData() {
    const { PRODUCTS_API } = API
    const res = await fetch(PRODUCTS_API)
    const json = await res.json()
    if (json.status) {
      setProductsData(json.products)
      setFilteredProducts(productsData)
      renderCategorySelector(json.products)
    }
  }

  useEffect(() => {
    fetchProductsData()
  }, [])

  useEffect(() => {
    if (selectedCategory === '全部') {
      setFilteredProducts(productsData)
    } else {
      const newProducts = productsData.filter((product: productsDataType) => product.category === selectedCategory)
      setFilteredProducts(newProducts)
    }
  }, [selectedCategory])

  return (
    <>
      <div className="mb-8">
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <ProductsList products={filteredProducts} />
    </>
  )
}

export default Products