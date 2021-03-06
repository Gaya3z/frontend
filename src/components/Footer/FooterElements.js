import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  sectionDesktop : {
    display : "flex",
    [theme.breakpoints.down('md')] : {
      display : "none"
    },
  },
  sectionMobile : {
    display : "none",
    [theme.breakpoints.down('md')] : {
      display : "flex",
    },
  },
}))

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width : 100vw;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
  @media screen and (max-width : 900px){
  margin-bottom: 12px;
  padding: 12px;
  }
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
  @media screen and (max-width : 900px){
    align-items : center;
    font-size : 18px;
  }
`;

export const FooterSubText = styled.p`
  font-size: 14px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border : 1px ;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid var(--primary);
  &::placeholder {
    color: #242424;
    font-size : 12px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items : center;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  text-align: left;
  width: 240px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 900px) {
    margin: 0;
    padding: 10px;
    width: 80%;
  }
`;

export const FooterLinkTitle = styled(Link)`
  font-size : 16px;
  margin-bottom: 16px;
  text-decoration  : none;
  color : white;
  @media screen and (max-width: 900px) {
    font-size : 14px;
  }
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: var(--grey);
    transition: 0.3s ease-out;
  }
  @media screen and (max-width : 600px){
    font-size : 13px;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const HorizontalLine = styled.div`
  background : #fff;
  color : #fff;
  border: 0.2px solid rgba(255, 255, 255, 0.5);
  opacity : 0.1 ;
  width : 340px;  
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  margin-left: 35%;
  @media screen and (max-width: 900px){
    margin-right : 37%;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 32px;
  @media screen and (max-width: 900px){
    font-size : 150%;
  }
`;
