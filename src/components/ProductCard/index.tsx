import Image from 'next/image'
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

export const ProductCard = () => {
  return (
    <Container>
      <Card>
        <div>
          <Image
            src="/images/wine.png"
            alt="Imagem do produto vinho"
            width={198}
            height={178}
          />
        </div>

        <Title>
          <p>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</p>
        </Title>

        <ContentContainer>
          <PromotionContainer>
            <PreviousPrice>RS37,40</PreviousPrice>

            <Promotion>
              <p>60% OFF</p>
            </Promotion>
          </PromotionContainer>

          <PriceContainer>
            <ProductTitle>SÓCIO WINE</ProductTitle>
            <Price>RS30,00</Price>
          </PriceContainer>

          <NonMember>
            <NonMemberPrice>NÃO SÓCIO R$37,40</NonMemberPrice>
          </NonMember>
        </ContentContainer>
      </Card>

      <ButtonContainer>
        <button type="button">Adicionar</button>
      </ButtonContainer>
    </Container>
  )
}
