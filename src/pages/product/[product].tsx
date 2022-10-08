import Image from 'next/image'
import Link from 'next/link'

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
            src="/images/wine-image.png"
            alt="Imagem de um vinho para comprar"
            width={381}
            height={579}
          />
        </ImageContainer>

        <Content>
          <ItemsContainer>
            <ProductLocationContainer>
              <p>Vinhos</p>
              <Image
                src="/images/arrow.svg"
                alt="Ícone de uma seta indicando a localização do produto"
                width={10}
                height={10}
              />

              <p>Estados Unidos</p>
              <Image
                src="/images/arrow.svg"
                alt="Ícone de uma seta indicando a localização do produto"
                width={10}
                height={10}
              />

              <p>Califórnia</p>
            </ProductLocationContainer>

            <TitleContainer>
              <h2>Apothic Red 2019</h2>
              <LocationDescription>
                <Image
                  src="/images/spain.svg"
                  alt="Ícone do país de origem do produto"
                  width={16}
                  height={16}
                />
                <p>Estados Unidos</p>
                <p>Tinto</p>
                <p>Meio Seco/Demi-Sec</p>
                <p>750 ml</p>
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
                <p>(2)</p>
              </LocationDescription>
            </TitleContainer>
          </ItemsContainer>

          <PriceContainer>
            <Price>
              <Real>R$</Real>
              <Value>63,67</Value>
            </Price>

            <Warning>NÃO SÓCIO R$120,95/UN.</Warning>
          </PriceContainer>

          <DescriptionContainer>
            <h4>Comentário do Sommelier</h4>
            <p>
              Produzido no terroir californiano, esse tinto mescla as variedades
              Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho
              inspirado nas antigas Apothecas (adegas subterrâneas), um lugar
              misterioso onde há mais de 800 anos os viticultores misturavam e
              armazenavam seus cobiçados vinhos.
            </p>
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
