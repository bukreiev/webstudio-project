import styled from 'styled-components';

import backgroundimg from '../../assets/background.jpg';
import backgroundimg2x from '../../assets/background@2x.jpg';
import backgroundtab from '../../assets/bgtablet.jpg';
import backgroundtab2x from '../../assets/bgtablet@2x.jpg';
import backgroundmob from '../../assets/bgphone.jpg';
import backgroundmob2x from '../../assets/bgphone@2x.jpg';

import { GrClose } from 'react-icons/gr';

export const HeroSection = styled.section`
  position: relative;
  padding-top: 118px;
  padding-bottom: 118px;
  margin-left: auto;
  margin-right: auto;

  text-align: center;
  max-width: 1600px;
  width: 100vw;
  height: 400px;

  background-color: #2f303a;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${backgroundmob});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${backgroundmob2x});
  }
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 481px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${backgroundtab});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(47, 48, 58, 0.4),
          rgba(47, 48, 58, 0.4)
        ),
        url(${backgroundtab2x});
    }
  }

  @media screen and (min-width: 769px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${backgroundimg});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(47, 48, 58, 0.4),
          rgba(47, 48, 58, 0.4)
        ),
        url(${backgroundimg2x});
    }
  }

  @media screen and (min-width: 1200px) {
    height: 600px;
    padding: 200px 0;
  }
  .modal-open {
    display: block;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-weight: 900;
  font-style: normal;
  font-size: 26px;
  line-height: 1.36;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 30px;

  @media screen and (min-width: 1200px) {
    font-size: 44px;
  }
`;

export const Button = styled.button`
  background-color: #2196f3;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  padding: 10px 32px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Backdrop = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 8;
`;

export const Modal = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  z-index: 15;
  transform: translate(-50%, -50%) scale(1);
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 450px;
  height: 550px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 40px;

  @media screen and (min-width: 1200px) {
    top: 50%;
    width: 528px;
    height: 581px;
  }
  .form {
    display: flex;
    flex-direction: column;

    textarea {
      height: 100px;
      margin-bottom: 20px;
      vertical-align: top;
      max-width: 100%;
      max-height: 150px;
    }
    div {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      @media screen and (min-width: 1200px) {
        margin-bottom: 30px;
      }
    }
    &__label {
      color: #757575;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.12px;
      text-align: left;
    }

    &__field {
      height: 40px;
      border-radius: 4px;
      border: 1px solid rgba(33, 33, 33, 0.2);
      margin-bottom: 10px;
      padding: 12px;

      &:focus {
        outline: 1px solid #188ce8;
        border: none;
      }

      &:last-child:checked {
        background-color: #188ce8;
      }
    }
  }
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 12px;
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Close = styled(GrClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const ModalText = styled.p`
  font-size: 12px;
  margin-left: 10px;
  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
`;

export const ModalLink = styled.a`
  text-decoration: underline;
  color: #188ce8;
  font-size: 12px;
  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
`;

export const Submit = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  margin: 0 auto;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.96px;

  &:hover {
    background-color: #188ce8;
  }
  @media screen and (min-width: 1200px) {
    width: 200px;
    height: 50px;
  }
`;
