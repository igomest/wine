import { useProducts } from 'contexts/useProducts'

import { FilterByPrice } from 'components/FilterByPrice'
import { Pagination } from 'components/Pagination'
import { ProductCard } from 'components/ProductCard'

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
  const { products, data, page, setPage, isLoading } = useProducts()

  return (
    <Container>
      <ItemsContainer>
        <FilterContainer>
          <FilterByPrice />
        </FilterContainer>

        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
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
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    discount={product.discount}
                    priceMember={product.priceMember}
                    priceNonMember={product.priceNonMember}
                  />
                ))}

                <Pagination
                  currentPage={page}
                  totalPages={data.totalItems}
                  onPageChange={setPage}
                />
              </Products>
            </ProductsContainer>
          </>
        )}
      </ItemsContainer>
    </Container>
  )
}

export default Home
