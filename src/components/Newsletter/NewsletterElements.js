import styled from 'styled-components';
import { Button } from '../../globalStyles'

export const NewsletterSec = styled.div`
  margin-top : -10% ;
  color: var(--white);
  padding: 80px 0;
  background: var(--white);
`
export const NewsletterBox = styled.div`
  background: #4B4E54;
  box-shadow: 0px 0px 30px rgba(125, 125, 125, 0.5);
  border-radius: 49.4986px 2.23542px;
  text-decoration: none;
  height : 420px;
  width : 420px;
`
export const NewsletterTitle = styled.h2`
  color : var(--white);
  font-weight : 300px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`

export const TitleWrapper  =styled.div`
  padding : 25px;
  margin-left:20%;
`

export const NewsletterText = styled.p`
  color : var(--white);
  text-align : center;
`

export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    margin: 0 30px;
    flex-direction: column;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  margin-top : -60px;
  padding: 45px;
`;

export const SearchBar = styled.input`
  width: 340px;
  height : 45px;
  padding: 8px 30px;
  border-radius: 15px;
  outline: none;
  font-size: 14px;
  margin-bottom: 25px;
  color : var(--grey);
  @media screen and (max-width: 768px){
      margin-left:25%;
    }
`
export const EmailButton = styled(Button)`
  background : var(--white);
  color : #4B4E54;
  margin-left: 30%;
  @media screen and (max-width : 768px){
    width : 50% ;
    margin-left : 25%;
  }
`

export const NewsletterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

