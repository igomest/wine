import { Product, ProductsContextData } from '../../interfaces/types'
import { ProductsProviderProps } from 'interfaces/props'

import { createContext, useState, useEffect, useContext } from 'react'
import { api } from 'services/api'

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
)

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [data, setData] = useState<any>({})
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    api
      .get(`/products?page=${page}&limit=9`)
      .then((res) => {
        setData(res.data)
        setProducts(res.data.items)
      })
      .catch((err) => console.log(err.response.data))
  }, [page])

  const productsFiltered = products.filter((product) => {
    if (search === null) {
      return product
    }

    if (typeof search === 'string') {
      if (
        product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      ) {
        return product
      }
    }
  })

  return (
    <ProductsContext.Provider
      value={{ data, page, setPage, products: productsFiltered, setSearch }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => {
  const context = useContext(ProductsContext)

  return context
}
