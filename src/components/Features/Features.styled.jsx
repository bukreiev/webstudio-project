import styled from 'styled-components';
import iconAntenna from '../../assets/icon-antenna.svg';
import iconClock from '../../assets/icon-clock.svg';
import iconLaptop from '../../assets/icon-laptop.svg';
import iconAstronaut from '../../assets/icon-astronaut.svg';

export const FeaturesSection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100vw;
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

export const List = styled.ul`
  margin: 0;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
  }
  @media screen and (min-width: 1200px) {
    flex-wrap: nowrap;
    margin: 0;
  }
`;

export const Item = styled.li`
  max-width: 450px;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    max-width: 354px;
    margin: 15px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 270px;
    margin: 0;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  .logo1 {
    background-image: url(${iconAntenna});
  }
  .logo2 {
    background-image: url(${iconClock});
  }
  .logo3 {
    background-image: url(${iconLaptop});
  }
  .logo4 {
    background-image: url(${iconAstronaut});
  }
`;
export const Logo = styled.svg`
  width: 100%;
  max-width: 450px;
  height: 120px;
  background-color: #f5f4fa;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 768px) {
    max-width: 354px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 270px;
  }
`;

export const Title = styled.h3`
  color: #212121;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 10px;
  max-width: 450px;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 354px;
    text-align: left;
  }
  @media screen and (min-width: 1200px) {
    max-width: 270px;
  }
`;

export const Text = styled.p`
  color: #757575;
  text-align: left;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  max-width: 450px;
  @media screen and (min-width: 768px) {
    max-width: 354px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 270px;
  }
`;
