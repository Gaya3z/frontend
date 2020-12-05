import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CatalogSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;
  justify-content: center;
  background : whitesmoke;
  margin-top : 80px;
  width : 100vw;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  align-items : flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin : 0;
    margin-top : 50px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 350px;
  box-sizing: border-box;
  background: var(--white);
  text-decoration: none;
  padding : 50px;
  background : whitesmoke;
  @media screen and (max-width : 768px){
    padding : 10px 50px;
  }
`;

export const Topic = styled.p`
  color : var(--primary);
  font-style : 16px;
  font-weight : 600;
  align-items : left;
  padding : 5px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

export const Item = styled(Link)`
    color : var(--grey);
    align-items : left;
    text-decoration : none;
    padding : 5px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    :hover{
        transform: scale(1.01);
        transition: all 0.1s;
    }
    @media screen and (max-width : 768px){
      text-shadow : 0;
    }
`