import { useProducts } from 'components/hooks/useProducts'
import { useState } from 'react'
import { Container, Title } from './styles'

export const FilterByPrice = () => {
  return (
    <Container>
      <Title>
        <h4>Refine sua busca</h4>

        <p>Por preço</p>
      </Title>

      <ul>
        <li>
          <div>
            <input type="radio" />
            <label>Até R$40</label>
          </div>
        </li>

        <li>
          <div>
            <input type="radio" />
            <label>R$40 a R$60</label>
          </div>
        </li>

        <li>
          <div>
            <input type="radio" />
            <label>R$100 a R$200</label>
          </div>
        </li>

        <li>
          <div>
            <input type="radio" />
            <label>R$100 a R$500</label>
          </div>
        </li>

        <li>
          <div>
            <input type="radio" />
            <label>Acima de R$500</label>
          </div>
        </li>
      </ul>
    </Container>
  )
}
