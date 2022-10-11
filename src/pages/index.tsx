import { FilterByPrice } from 'components/FilterByPrice'
import { Pagination } from 'components/Pagination'
import { ProductCard } from 'components/ProductCard'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useState } from 'react'
import { api } from 'services/api'
import {
  Container,
  FilterContainer,
  FoundProductsTitle,
  ItemsContainer,
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

interface Data {
  page: number
  totalPages: number
  itemsPerPage: number
  totalItems: number
}

interface ProductProps {
  data: Data
  products: Product[]
}

const Home = ({ products, data }: ProductProps) => {
  const [page, setPage] = useState(1)

  return (
    <Container>
      <ItemsContainer>
        <FilterContainer>
          <FilterByPrice />
        </FilterContainer>

        <ProductsContainer>
          <FoundProductsTitle>
            <p>
              <strong>49</strong>
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
        totalPages={data.totalPages}
        onPageChange={setPage}
      />
    </Container>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get(`?page=1&limit=10`)
  console.log({ data })

  const products = data.items.map((product: Product) => {
    return {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      discount: product.discount,
      priceMember: product.priceMember,
      priceNonMember: product.priceNonMember
    }
  })

  return {
    props: {
      data,
      products
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
