import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CatalogSection = styled.div`
  padding: 0 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background : whitesmoke;
`;

export const ListWrapper = styled.div`
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

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left : 8%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom : 25px;
    margin : 0;
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
`