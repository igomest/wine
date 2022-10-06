import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    margin-top: 1rem;

    li {
      div {
        display: flex;
        width: auto;
        justify-content: flex-start;

        input {
          width: 1.2rem;
          height: 1.2rem;
        }

        label {
          margin-left: 14px;
        }
      }
    }
  }
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14rem;
  height: 6rem;

  h4 {
    font-size: 1.3rem;
    font-family: 'Neo Sans Std', 'sans-serif';
  }

  p {
    font-weight: 700;
    font-size: 1.1rem;
  }
`
