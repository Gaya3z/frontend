import styled from 'styled-components';
import { Button, Container } from '../../globalStyles'

export const NewsletterSec = styled(Container)`  
  color: var(--white);
  background: var(--white);
  height : fit-content;
  align-items  : center;
  justify-content : center;
  margin-top : 50px;
  margin-bottom : 50px;
`
export const NewsletterBox = styled.div`
  display : flex;
  flex-direction : column;
  background: #4B4E54;
  box-shadow: 0px 0px 30px rgba(125, 125, 125, 0.5);
  border-radius: 49.4986px 2.23542px;
  text-decoration: none;
  height : 420px;
  width : 420px;
  justify-content : center;
  align-items : center;
  padding : 20px;
  margin-top : 10px;  
  @media screen and (max-width: 768px) {
    margin-top : 20px;
    width : 90vw;
  }
`
export const NewsletterTitle = styled.h2`
  color : var(--white);
  font-weight : 300px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const TitleWrapper  =styled.div`
  margin : 10px;
`

export const NewsletterText = styled.p`
  color : var(--white);
  text-align : center;
`

export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width : fit-content;
`;

export const TextWrapper = styled.div`
  max-width : 90%;
  margin : 20px;
  margin-top : -10px;
  width : fit-content;
`;

export const SearchBar = styled.input`
  width: 340px;
  height : 45px;
  padding: 8px 30px;
  border-radius: 15px;
  outline: none;
  font-size: 14px;
  color : var(--grey);
  margin : 20px;
  margin-top : 0;
  @media screen and (max-width: 768px) {
    width : 75vw;
    font-size: 10px;
  }
`
export const EmailButton = styled(Button)`
  background : var(--white);
  color : #4B4E54;
  margin : 20px;
  margin-top : 0;
  width : "fit-content";
`

export const NewsletterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

