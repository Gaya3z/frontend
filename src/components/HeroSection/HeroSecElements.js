import { Button, Title } from '../../globalStyles'
import styled from 'styled-components';
import bg from './desktopBg.png'

export const HeroContainer = styled.div`
  background: url(${bg}) center center/cover no-repeat; 
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`
export const HeroTitle = styled(Title)`
  margin-top: -65px;
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
    filter: drop-shadow(10px 10px 40px rgba(0, 0, 0, 0.30));
    @media screen and (max-width: 960px){
        width: 80%;
        height: auto;
    }
`

export const HeroBtn = styled(Button)`
  margin-right: -43%;
  @media screen and (max-width: 960px){
    margin-right: 0;
    width: 50%;
  }
`
