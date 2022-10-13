import { ProductCardProps } from 'interfaces/props'

import Image from 'next/image'
import Link from 'next/link'
import {
  ButtonContainer,
  Card,
  Container,
  ContentContainer,
  NonMember,
  NonMemberPrice,
  PreviousPrice,
  Price,
  PriceContainer,
  ProductTitle,
  Promotion,
  PromotionContainer,
  Title
} from './styles'

export const ProductCard = ({
  id,
  name,
  image,
  price,
  discount,
  priceMember,
  priceNonMember
}: ProductCardProps) => {
  return (
    <Container>
      <Card>
        <Link href={`/product/${id}`}>
          <a>
            <div>
              <Image
                src={image}
                alt="Imagem do produto vinho"
                width={198}
                height={178}
              />
            </div>
          </a>
        </Link>

        <Title>
          <p>{name}</p>
        </Title>

        <ContentContainer>
          <PromotionContainer>
            <PreviousPrice>R${price}</PreviousPrice>

            <Promotion>
              <p>{discount}% OFF</p>
            </Promotion>
          </PromotionContainer>

          <PriceContainer>
            <ProductTitle>SÓCIO WINE</ProductTitle>
            <Price>R${priceMember}</Price>
          </PriceContainer>

          <NonMember>
            <NonMemberPrice>NÃO SÓCIO R${priceNonMember}</NonMemberPrice>
          </NonMember>
        </ContentContainer>
      </Card>

      <ButtonContainer>
        <button type="button">Adicionar</button>
      </ButtonContainer>
    </Container>
  )
}
