import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 16.5rem;
  height: 25rem;
  margin: 8px;
`

export const Card = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15.5rem;
  height: 20.5rem;
  padding: 0.9rem;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
`
export const Title = styled.div`
  width: 100%;
  height: 2rem;
  text-align: center;

  p {
    font-weight: 700;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 3.7rem;
`

export const PromotionContainer = styled.div`
  display: flex;
  width: 6.5rem;
  height: 1.5rem;
  justify-content: space-between;
  align-items: center;
`
export const PreviousPrice = styled.s`
  color: var(--gray);
  font-size: 11px;
  font-weight: 700;
`
export const Promotion = styled.span`
  background: var(--orange);
  width: 3.2rem;
  height: 1rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 11px;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 9rem;
  height: 2rem;
`
export const ProductTitle = styled.p`
  font-weight: 700;
  font-size: 11px;
`
export const Price = styled.p`
  font-weight: 700;
  color: var(--pink);
  font-size: 1.1rem;
`
export const NonMember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NonMemberPrice = styled.p`
  font-weight: 700;
  font-size: 11px;
  color: var(--gray);
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;

  button {
    background-color: var(--green);
    color: var(--white);
    width: 256px;
    height: 39px;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);

    &:hover {
      filter: brightness(0.9);
    }
  }
`
