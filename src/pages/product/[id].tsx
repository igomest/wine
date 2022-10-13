import { useProducts } from 'components/hooks/useProducts'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  Container,
  ContentContainer,
  ImageContainer,
  Content,
  BackIconContainer,
  ProductLocationContainer,
  TitleContainer,
  LocationDescription,
  PriceContainer,
  Price,
  Real,
  Value,
  Warning,
  DescriptionContainer,
  ButtonContainer,
  CounterButtonContainer,
  Button,
  ItemsContainer
} from './styles'

const Product = () => {
  const router = useRouter()
  const { id } = router.query

  const { products } = useProducts()

  const product = products.find((product) => product.id === Number(id))

  return (
    <Container>
      <ContentContainer>
        <Link href="/">
          <a>
            <BackIconContainer>
              <Image
                src="/images/arrow-black.svg"
                alt="Ícone de uma seta para voltar para a página anterior"
                width={20}
                height={13}
              />

              <p>Voltar</p>
            </BackIconContainer>
          </a>
        </Link>

        <ImageContainer>
          <Image
            src={product.image}
            alt="Imagem de um vinho para comprar"
            width={381}
            height={579}
          />
        </ImageContainer>

        <Content>
          <ItemsContainer>
            <ProductLocationContainer>
              <p>{product.type}</p>
              <Image
                src="/images/arrow.svg"
                alt="Ícone de uma seta indicando a localização do produto"
                width={10}
                height={10}
              />

              <p>{product.country}</p>
              <Image
                src={product.flag}
                alt="Ícone de uma seta indicando a localização do produto"
                width={10}
                height={10}
              />

              <p>{product.region}</p>
            </ProductLocationContainer>

            <TitleContainer>
              <h2>{product.name}</h2>
              <LocationDescription>
                <Image
                  src={product.flag}
                  alt="Ícone do país de origem do produto"
                  width={16}
                  height={16}
                />
                <p>{product.country}</p>
                <p>{product.type}</p>
                <p>{product.classification}</p>
                <p>{product.size}</p>
                <span>
                  <Image
                    src="/images/star.svg"
                    alt="Ícone de uma estrela indicando a classificação do produto"
                    width={14.3}
                    height={13.2}
                  />

                  <Image
                    src="/images/star.svg"
                    alt="Ícone de uma estrela indicando a classificação do produto"
                    width={14.3}
                    height={13.2}
                  />

                  <Image
                    src="/images/star.svg"
                    alt="Ícone de uma estrela indicando a classificação do produto"
                    width={14.3}
                    height={13.2}
                  />
                </span>
                <p>({product.avaliations})</p>
              </LocationDescription>
            </TitleContainer>
          </ItemsContainer>

          <PriceContainer>
            <Price>
              <Real>R$</Real>
              <Value>{product.priceMember}</Value>
            </Price>

            <Warning>NÃO SÓCIO R${product.priceNonMember}.</Warning>
          </PriceContainer>

          <DescriptionContainer>
            <h4>Comentário do Sommelier</h4>
            <p>{product.sommelierComment}</p>
          </DescriptionContainer>

          <ButtonContainer>
            <CounterButtonContainer>
              <button type="button">-</button>
              <p>1</p>
              <button type="button">+</button>
            </CounterButtonContainer>

            <Button>
              <button type="button">Adicionar</button>
            </Button>
          </ButtonContainer>
        </Content>
      </ContentContainer>
    </Container>
  )
}

export default Product
