import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 13rem;
  height: 3rem;
  margin-top: 2rem;

  p {
    color: var(--pink);
  }
`
export const CurrentPageButton = styled.button`
  background: var(--pink);
  border-radius: 3px;
  width: 38px;
  height: 38px;
  color: var(--white);
  border: 1px solid var(--pink);
`

export const Button = styled.button`
  width: 38px;
  height: 38px;
  background: var(--white);
  color: var(--pink);
  border-radius: 3px;
  border: 1px solid var(--pink);
`
