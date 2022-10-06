import { FilterByPrice } from 'components/FilterByPrice'
import { ProductCard } from 'components/ProductCard'
import {
  Container,
  FilterContainer,
  FoundProductsTitle,
  ItemsContainer,
  Products,
  ProductsContainer
} from './home.styles'

const Home = () => {
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Products>
        </ProductsContainer>
      </ItemsContainer>
    </Container>
  )
}

export default Home
