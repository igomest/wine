import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6rem;
  width: 80%;
  height: 100%;

  a {
    text-decoration: none;
    color: var(--black);
  }
`

export const BackIconContainer = styled.span`
  width: 5rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: 'Neo Sans Std', 'sans serif';
    font-size: 1.2rem;
  }
`

export const ImageContainer = styled.div`
  width: 381px;
  height: 579px;
  margin-top: 4rem;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 30rem;
  height: 33rem;
  margin-top: 2.2rem;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 6.5rem;
`

export const ProductLocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
  height: 2rem;

  p {
    font-weight: 700;
    color: var(--pink);
  }
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 4rem;

  h2 {
    font-family: 'Neo Sans Std', 'sans serif';
  }
`
export const LocationDescription = styled.div`
  display: flex;
  width: 90%;
  height: 2rem;
  justify-content: space-between;
  align-items: center;

  p {
    color: var(--gray);
    font-size: 0.9rem;
  }
`
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 5rem;
`
export const Price = styled.span`
  display: flex;
  width: 6.5rem;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
`
export const Real = styled.p`
  font-weight: 900;
  color: var(--pink);
  font-size: 1.2rem;
  margin-top: 8px;
`
export const Value = styled.p`
  font-weight: 900;
  color: var(--pink);
  font-size: 1.9rem;
`
export const Warning = styled.p`
  color: var(--gray);
  font-weight: 700;
  font-size: 1rem;
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 9rem;

  h4 {
    font-family: 'Neo Sans Std', 'sans serif';
    font-size: 1rem;
  }

  p {
    color: var(--gray);
    font-family: 'Saira', 'sans serif';
    font-size: 0.9rem;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 19rem;
  height: 3.5rem;
  padding: 1rem;
  background: var(--green);
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
`
export const CounterButtonContainer = styled.div`
  display: flex;
  width: 7rem;
  height: 2rem;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
    border-radius: 1.6rem;
    border: 1px solid var(--white);
    width: 1.6rem;
    height: 1.6rem;
    color: var(--white);
  }

  p {
    font-size: 1.6rem;
    color: var(--white);
  }
`
export const Button = styled.div`
  width: 5rem;
  height: 2rem;

  button {
    border: none;
    background: none;
    color: var(--white);
    width: 100%;
    height: 100%;
    font-size: 1.1rem;
  }
`
