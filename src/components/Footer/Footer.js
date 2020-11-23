import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTelegram
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  HorizontalLine
} from './FooterElements';
import coursenator from '.../../../public/FooterLogo.svg'

function Footer() {
  
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Sign up for Coursenator Newsletter
        </FooterSubHeading>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig primary>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>
              <img src = { coursenator } alt = "Coursenator" />
            </FooterLinkTitle>
            <FooterSubText>
            Lorem ipsum dolor sit amet, fabulas molestiae nam ad, eos an sonet deleniti volutpat. Mel sonet persecuti complectitur ut. 
            </FooterSubText>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLink to='/about'>About Us</FooterLink>
            <FooterLink to='/'>Blogs</FooterLink>
            <FooterLink to='/'>FAQs</FooterLink>
            <FooterLink to='/'>Contact Us</FooterLink>
            <FooterLink to='/'>Terms and Conditions</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Search Courses By</FooterLinkTitle>
            <FooterLink to='/catalog'>Subjects</FooterLink>
            <FooterLink to='/provider'>Providers</FooterLink>
            <FooterLink to='/language'>Languages</FooterLink>
            <FooterLink to='/university'>Institutions</FooterLink>
            <FooterLink to='/university'>Universities</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Quick Links</FooterLinkTitle>
            <FooterLink to='/'>Top courses</FooterLink>
            <FooterLink to='/'>Best paid courses</FooterLink>
            <FooterLink to='/'>Best language courses</FooterLink>
            <FooterLink to='/'>Free certificate courses</FooterLink>
            <FooterLink to='/'>Online MBA from top B-Schools</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <HorizontalLine />
      <SocialMedia>
        <SocialMediaWrap>
          <SocialIcons>
          <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Telegram'>
              <FaTelegram />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;