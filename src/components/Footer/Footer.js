import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTelegram,
} from 'react-icons/fa';
import {SiMedium} from 'react-icons/si'
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
  HorizontalLine,
  useStyles
} from './FooterElements';
import coursenator from '.../../../public/FooterLogo.svg'
import Menu from './Menu';

function Footer() {
  const classes = useStyles()
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
            <FooterLinkTitle to = "/">
              <img src = { coursenator } alt = "Coursenator" />
            </FooterLinkTitle>
            <FooterSubText>
            Lorem ipsum dolor sit amet, fabulas molestiae nam ad, eos an sonet deleniti volutpat. Mel sonet persecuti complectitur ut. 
            </FooterSubText>
          </FooterLinkItems>
          <div className = {classes.sectionMobile}>
            <Menu />
          </div>
          <div className = {classes.sectionDesktop}>
          <FooterLinkItems>
            <FooterLink to='/about'>About Us</FooterLink>
            <FooterLink to='/blogs'>Blogs</FooterLink>
            <FooterLink to='/faq'>FAQs</FooterLink>
            <FooterLink to='/contactus'>Contact Us</FooterLink>
            <FooterLink to='/newsandarticles'>News and Articles</FooterLink>
            <FooterLink to = "/termsandconditions">Terms and Conditions</FooterLink>
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
          </div>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <HorizontalLine />
      <SocialMedia>
        <SocialMediaWrap>
          <SocialIcons>
          <SocialIconLink href='https://www.linkedin.com/company/e-learners/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href='https://www.facebook.com/Courses.do1' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.youtube.com/channel/UCpcUP0NzPTZKaEnKXl1mVpg' target='_blank' aria-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/e__learners/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='https://t.me/ElearnersFreeCourses' target='_blank' aria-label='Telegram'>
              <FaTelegram />
            </SocialIconLink>
            <SocialIconLink href='https://medium.com/e-learners' target='_blank' aria-label='Medium'>
              <SiMedium />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;