import Image from 'next/image'
import { useState } from 'react'
import {
  ButtonContainer,
  Container,
  ItemsContainer,
  NavContainer,
  SearchContainer,
  UtilsContainer,
  WineBoxContainer
} from './styles'

export const Header = () => {
  const [isSearching, setIsSearching] = useState(false)

  return (
    <Container>
      <ItemsContainer>
        <NavContainer>
          <div>
            <Image
              src="/images/logo.svg"
              alt="Logo da Wine"
              width={102}
              height={31}
            />
          </div>

          <nav>
            <ul>
              <li>
                <a>CLube</a>
              </li>

              <li>
                <a>Loja</a>
              </li>

              <li>
                <a>Produtores</a>
              </li>

              <li>
                <a>Ofertas</a>
              </li>

              <li>
                <a>Eventos</a>
              </li>
            </ul>
          </nav>
        </NavContainer>

        {isSearching && (
          <SearchContainer>
            <input type="text" />
          </SearchContainer>
        )}

        <UtilsContainer>
          <ButtonContainer>
            <button type="button" onClick={() => setIsSearching(!isSearching)}>
              <Image
                src="/images/search.svg"
                alt="Ícone para abrir o campo de pesquisa"
                width={31}
                height={31}
              />
            </button>
          </ButtonContainer>

          <ButtonContainer>
            <button>
              <Image
                src="/images/profile.svg"
                alt="Ícone do perfil do usuário"
                width={31}
                height={31}
              />
            </button>
          </ButtonContainer>

          <WineBoxContainer>
            <Image
              src="/images/winebox.svg"
              alt="Imagem do perfil do usuário"
              width={56}
              height={56}
            />
          </WineBoxContainer>
        </UtilsContainer>
      </ItemsContainer>
    </Container>
  )
}
