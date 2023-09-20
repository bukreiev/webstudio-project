import styled from 'styled-components';

export const WorkSection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (min-width: 1200px) {
    padding-top: 0;
    padding-bottom: 94px;
  }

  @media screen and (max-width: 1200px) {
    display: none;
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
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  position: relative;
  margin-right: 30px;
  height: 294px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  width: 370px;
  height: 294px;
`;

export const Text = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 370px;
  height: 70px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.14em;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffffff;
  background: rgba(47, 48, 58, 0.8);
  margin: 0;
`;
