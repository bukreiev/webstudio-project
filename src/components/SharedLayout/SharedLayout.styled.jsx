import styled from 'styled-components';

import { FiMail, FiMenu } from 'react-icons/fi';
import { PiDeviceMobileBold } from 'react-icons/pi';
import { BsSend } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

// HEADER SECTION

export const Header = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ececec;
  position: relative;
  width: 100vw;
  display: flex;

  @media screen and (min-width: 768px) {
    padding-top: 21px;
    padding-bottom: 21px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 24px;
    padding-bottom: 25px;
  }
  .up {
    display: flex;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  max-width: 450px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    flex-wrap: nowrap;
    justify-content: space-between;
    text-align: left;
  }
  .open {
    right: -10px;
  }
`;

export const Logo = styled.a`
  color: #000000;
  font-weight: bold;
  font-size: 26px;
  font-family: Raleway, sans-serif;
  line-height: 1.19;
  letter-spacing: 0.03em;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    margin-right: 88px;
  }
  @media screen and (min-width: 1200px) {
    margin-right: 93px;
  }

  span {
    color: #2196f3;
  }
`;

export const ButtonMenu = styled.button`
  background-color: inherit;
  border: 0;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Burger = styled(FiMenu)`
  display: block;
`;

export const Close = styled(GrClose)`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }

  position: absolute;
  top: 20px;
  right: 25px;
`;

export const Mobile = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    display: block;
    right: -100vw;
    top: 0;
    height: 100vh;
    width: 70vw;
    max-width: 450px;
    padding: 20px;
    border-radius: 8px;
    background-color: #81bbeb;
    z-index: 20;
    transition: all 0.3s linear;
  }

  @media screen and (min-width: 768px) {
    height: auto;
    position: relative;
    display: flex;
    align-items: center;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    padding: 0;
    margin-right: 84px;
    margin-top: 0;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 305px;
  }

  li {
    margin-bottom: 35px;

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 50px;
      &:last-child {
        margin-right: 0;
      }
    }

    @media screen and (min-width: 1200px) {
      margin-right: 50px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Link = styled.a`
  color: #212121;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.14em;
  text-align: left;
  letter-spacing: 0.02em;

  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #2196f3;
  }

  @media screen and (min-width: 768px) {
    padding: 32px 0;
    font-size: 14px;
  }
  cursor: pointer;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    display: inline-flex;
    flex-direction: column;
    justify-content: left;
    height: auto;
    margin: 0;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  li {
    display: flex;
    align-items: center;
    margin-top: 33px;

    &:hover,
    &:focus {
      .contact-link,
      .icon {
        color: #2196f3;
      }
    }

    @media screen and (max-width: 767px) {
      &:last-child {
        margin-right: 0;
        margin-top: 0;
        margin-bottom: 0;
      }
    }
    @media screen and (min-width: 768px) {
      margin-right: 0;
      margin-top: 0;
      margin-bottom: 10px;
      &:last-child {
        margin: 0;
      }
    }
    @media screen and (min-width: 1200px) {
      margin-right: 30px;
      margin-bottom: 0;

      &:last-child {
        margin-right: 0;
        margin-bottom: 0;
      }
    }
  }
`;

export const MailIcon = styled(FiMail)`
  width: 22px;
  height: 16px;
  color: #212121;

  margin-right: 7px;
  @media screen and (min-width: 768px) {
    color: #757575;
  }
`;

export const PhoneIcon = styled(PiDeviceMobileBold)`
  width: 15px;
  height: 24px;
  color: #212121;

  margin-right: 7px;
  @media screen and (min-width: 768px) {
    color: #757575;
  }
`;

export const ContactLink = styled.a`
  color: #212121;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.14em;
  letter-spacing: 0.02em;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    color: #757575;

    font-size: 12px;
  }
  @media screen and (min-width: 1200px) {
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    font-size: 14px;
  }
`;

// FOOTER SECTION

export const Footer = styled.footer`
  background-color: #2f303a;
  color: #ffffff;
  padding: 60px 0;
  margin: 0 auto;

  .footer-logo {
    color: #ffffff;
    @media screen and (min-width: 768px) {
      margin: 0;
    }
  }

  .footer-cont {
    padding: 0 15px;
    margin: 0 auto;
    text-align: center;
    max-width: 450px;
    @media screen and (min-width: 768px) {
      max-width: 768px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    @media screen and (min-width: 1200px) {
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      text-align: left;
    }
  }
`;

export const AddressList = styled.ul`
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  margin-top: 20px;

  li {
    margin-bottom: 9px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  .footer-link {
    color: rgba(255, 255, 255, 0.6);
  }
  .footer-link:hover,
  .footer-link:focus {
    color: #2196f3;
  }
`;

export const AddressText = styled.p`
  color: #ffffff;
`;

export const Social = styled.div`
  margin: 60px 0;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    padding-top: 5px;
    margin-left: 165px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 70px;
    padding-top: 12px;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 14px;
  line-height: 1.14em;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 0;
`;

export const NetworkList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const NetworkLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  color: #afb1b8;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.1);
  &:hover,
  &:focus {
    background-color: #2196f3;
    color: #ffffff;
  }
`;

export const Subscribe = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 0;
    padding-top: 12px;
    margin-left: 93px;

    div {
      display: flex;
    }
  }
`;

export const FormTitle = styled.h2`
  font-weight: bold;
  font-size: 14px;
  line-height: 1.14em;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 0;
`;

export const Form = styled.form`
  margin-bottom: 10px;

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const Input = styled.input`
  display: block;

  width: 100%;
  height: 50px;

  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.6);

  background: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;

  padding-left: 16px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 450px;
    margin-bottom: 20;
  }
  @media screen and (min-width: 1200px) {
    width: 358px;
    margin-bottom: 0;
    margin-right: 12px;
  }

  &:focus-within {
    border-color: #2196f3;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #2196f3;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.88em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.06em;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #188ce8;
  }
`;

export const SendIcon = styled(BsSend)`
  display: inline-flex;
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;
