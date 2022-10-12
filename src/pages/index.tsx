import { FilterByPrice } from 'components/FilterByPrice'
import { Pagination } from 'components/Pagination'
import { ProductCard } from 'components/ProductCard'
import { Product } from 'interfaces/types'
import { useEffect, useState } from 'react'
import { api } from 'services/api'

import {
  Container,
  FilterContainer,
  FoundProductsTitle,
  ItemsContainer,
  Products,
  ProductsContainer
} from './home.styles'

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

      <Pagination
        currentPage={page}
        totalPages={data.totalItems}
        onPageChange={setPage}
      />
    </Container>
  )
}

export default Home
