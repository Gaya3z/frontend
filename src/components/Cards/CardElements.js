import { FaRegShareSquare } from 'react-icons/fa';
import { GiArcheryTarget } from 'react-icons/gi';
import { VscTelescope } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardSection = styled.div`
  padding: 0 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--white);
`;

export const CardWrapper = styled.div`
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

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom : 25px;
  }
`;

export const Card = styled(Link)`
  background: var(--white);
  box-shadow: 0px 4px 15px rgba(125, 125, 125, 0.5);
  width: 280px;
  height: 270px;
  text-decoration: none;
  border-radius: 30px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 270px;
  padding: 24px;
  align-items: center;
  color: var(--grey);
`;

export const CardIcon = styled.div`
  color: var(--primary);
  margin: 15px 0;
`;

export const CardText = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
  margin-top: 15px;
`;

export const CardTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
  color: #000;
`;

export const Telescope = styled(VscTelescope)`
    width: 32px;
    height: 32px;
`
export const Target = styled(GiArcheryTarget)`
    width: 32px;
    height: 32px;
`

export const Share = styled(FaRegShareSquare)`
    width: 28px;
    height: 28px;
`