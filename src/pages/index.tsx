import { FilterByPrice } from 'components/FilterByPrice'
import { Pagination } from 'components/Pagination'
import { ProductCard } from 'components/ProductCard'
import { useEffect, useState } from 'react'
import { api } from 'services/api'

import {
  Container,
  FilterContainer,
  FoundProductsTitle,
  ItemsContainer,
  PaginationContainer,
  Products,
  ProductsContainer
} from './home.styles'

interface Product {
  id: number
  image: string
  name: string
  price: number
  discount: number
  priceMember: number
  priceNonMember: number
}

interface ProductData {
  page: number
  totalPages: number
  totalItems: number
}

const Home = () => {
  const [data, setData] = useState<any>({})
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api
      .get(`/products?page=${page}&limit=9`)
      .then((res) => {
        setData(res.data)
        setProducts(res.data.items)
      })
      .catch((err) => console.log(err.response.data))
  }, [page])

  return (
    <Container>
      <ItemsContainer>
        <FilterContainer>
          <FilterByPrice />
        </FilterContainer>

        <ProductsContainer>
          <FoundProductsTitle>
            <p>
              <strong>{data.totalItems}</strong>
            </p>
            <p>produtos encontrados</p>
          </FoundProductsTitle>

          <Products>
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                discount={product.discount}
                priceMember={product.priceMember}
                priceNonMember={product.priceNonMember}
              />
            ))}
          </Products>
        </ProductsContainer>
      </ItemsContainer>
      {/* 
      <PaginationContainer> */}
      <Pagination
        currentPage={page}
        totalPages={data.totalItems}
        onPageChange={setPage}
      />
      {/* </PaginationContainer> */}
    </Container>
  )
}

export default Home
