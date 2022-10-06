import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  background: var(--white);
  justify-content: space-around;
  align-items: center;
  height: 88.23px;
`
export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
`

export const NavContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    ul {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 86%;
      height: 100%;
      list-style: none;

      li {
        a {
          color: var(--gray);
          cursor: pointer;
        }
      }
    }
  }
`
export const UtilsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 17%;
  height: 4rem;
`
export const ButtonContainer = styled.div`
  button {
    border: 1px solid var(--gray);
    border-radius: 10rem;
    background: none;
    width: 56px;
    height: 56px;
  }
`
export const WineBoxContainer = styled.div`
  cursor: pointer;
`
