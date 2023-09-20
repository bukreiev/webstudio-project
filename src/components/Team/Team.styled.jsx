import styled from 'styled-components';

export const TeamSection = styled.section`
  background-color: #f5f4fa;
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (min-width: 1200px) {
    padding-top: 94px;
    padding-bottom: 94px;
  }
`;

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Title = styled.h2`
  color: #212121;
  font-weight: bold;
  font-size: 36px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.03em;
  margin-top: 0;
  margin-bottom: 50px;
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -15px;
  }
  @media screen and (min-width: 1200px) {
    flex-wrap: nowrap;
    margin: 0;
  }
`;

export const Item = styled.li`
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  max-width: 450px;
  width: 100%;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 354px;
    margin: 15px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 270px;
    margin: 0 30px 0 0;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 354px;
    height: 360px;
  }
  @media screen and (min-width: 1200px) {
    height: 260px;
  }
`;

export const Info = styled.div`
  padding: 30px 32px;
`;

export const Name = styled.p`
  color: #212121;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const Position = styled.p`
  color: #757575;
  font-weight: normal;
  font-size: 24px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  text-align: center;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const NetworkList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NetworkItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const NetWorkLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  color: #afb1b8;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #2196f3;
    color: #ffffff;
  }
`;
