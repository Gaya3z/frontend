import { Button, Title } from '../../globalStyles'
import styled from 'styled-components';
import bg from './desktopBg.png'

export const HeroContainer = styled.div`
  background: url(${bg}) center center/cover no-repeat; 
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`
export const HeroTitle = styled(Title)`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  color: var(--white);
  @media screen and (max-width: 960px){
    font-size: 20px;
  }
`
export const SearchBar = styled.input`
    width: 850px;
    height : 50px;
    padding: 8px 30px;
    border-radius: 25px;
    margin-top: 25px;
    outline: none;
    font-size: 16px;
    margin-bottom: 25px;
    border: 0.5px solid var(--primary);
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
    @media screen and (max-width: 960px){
        width: 80vw; 
        height : 45px;
        font-size : 12px;
    }
`

export const HeroBtn = styled(Button)`
  margin-left: auto;
  @media screen and (max-width: 960px){
    margin-left : 0px;
  }
`
export const HeroWrapper = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  margin-left : 15%;
  margin-right : 15%;
`