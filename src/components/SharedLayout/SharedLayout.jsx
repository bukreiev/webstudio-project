import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import {
  Header,
  Container,
  Logo,
  List,
  ContactList,
  Link,
  Anchor,
  ContactLink,
  MailIcon,
  PhoneIcon,
  Footer,
  AddressList,
  AddressText,
  Social,
  Title,
  NetworkList,
  NetworkLink,
  Subscribe,
  FormTitle,
  Form,
  Button,
  Input,
  SendIcon,
  Burger,
  ButtonMenu,
  Close,
  Mobile,
} from './SharedLayout.styled';

import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function SharedLayout() {
  const [isActive, setIsActive] = useState(false);

  const handleMobileMenu = () => {
    setIsActive(current => !current);
  };

  return (
    <>
      <Header>
        <Container className="up">
          <Logo href="/">
            <span>Web</span>Studio
          </Logo>
          <ButtonMenu type="button">
            <Burger onClick={handleMobileMenu}></Burger>
          </ButtonMenu>
          <Mobile className={isActive ? 'open' : ''}>
            <Close onClick={handleMobileMenu}></Close>
            <nav>
              <List>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Anchor href="#contacts">Contacts</Anchor>
                </li>
              </List>
            </nav>
            <ContactList>
              <li>
                <MailIcon className="icon" />
                <ContactLink
                  className="contact-link"
                  href="mailto:info@devstudio.com"
                >
                  info@devstudio.com
                </ContactLink>
              </li>
              <li>
                <PhoneIcon className="icon" />
                <ContactLink className="contact-link" href="tel:380961111111">
                  +38 096 111 11 11
                </ContactLink>
              </li>
            </ContactList>
          </Mobile>
        </Container>
      </Header>
      <Suspense
        fallback={
          <MutatingDots
            height="100"
            width="100"
            color="#2196f3"
            secondaryColor="#188ce8"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
      <Footer id="contacts">
        <Container className="footer-cont">
          <div>
            <Logo href="/" className="footer-logo">
              <span>Web</span>Studio
            </Logo>
            <address>
              <AddressList>
                <li>
                  <AddressText>Kiev, Lesia Ukrainka Ave, 26</AddressText>
                </li>
                <li>
                  <ContactLink
                    className="footer-link"
                    href="mailto:info@devstudio.com"
                  >
                    info@devstudio.com
                  </ContactLink>
                </li>
                <li>
                  <ContactLink className="footer-link" href="tel:380961111111">
                    +38 096 111 11 11
                  </ContactLink>
                </li>
              </AddressList>
            </address>
          </div>
          <Social>
            <Title>Join us</Title>
            <NetworkList>
              <li>
                <NetworkLink href="https://www.instagram.com">
                  <BsInstagram size={25} />
                </NetworkLink>
              </li>
              <li>
                <NetworkLink href="https://twitter.com">
                  <BsTwitter size={25} />
                </NetworkLink>
              </li>
              <li>
                <NetworkLink href="https://www.facebook.com">
                  <FaFacebookF size={25} />
                </NetworkLink>
              </li>
              <li>
                <NetworkLink href="https://www.linkedin.com">
                  <FaLinkedinIn size={25} />
                </NetworkLink>
              </li>
            </NetworkList>
          </Social>
          <Subscribe>
            <FormTitle>Subscribe to newsletter</FormTitle>
            <div>
              <Form>
                <Input type="email" name="email" placeholder="E-mail"></Input>
              </Form>
              <Button type="submit">
                Subscribe
                <SendIcon />
              </Button>
            </div>
          </Subscribe>
        </Container>
      </Footer>
    </>
  );
}
