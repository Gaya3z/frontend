import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
  --primary : #5C0090;
  --blue : #2D283E;
  --grey: #777;
  --white: #fff;
  --black: #000;
}
`
export const Title = styled.h1`
  font-size: 36px;
  color: var(--primary);
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin-bottom: 20px;
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 768px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  background: ${({ blue }) => (blue ? 'var(--blue)' : 'var(--primary)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 50px' : '10px 30px')};
  color: var(--white);
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ blue }) => (blue ? 'var(--primary)' : 'var(--blue)')};
    color: ${({ white }) => (white ? 'var(--primary)' : 'var(--white)')};
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export default GlobalStyle;