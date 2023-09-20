import styled from 'styled-components';

export const ClientsSection = styled.section`
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
  font-weight: bold;
  font-size: 28px;
  line-height: 1.16;
  letter-spacing: 0.03em;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 0;

  @media screen and (min-width: 1200px) {
    font-size: 36px;
    margin-bottom: 50px;
  }
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  margin: -15px;
  flex-wrap: wrap;
  list-style: none;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
    flex-wrap: nowrap;
    margin: 0;
  }
`;

export const Item = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  height: 92px;

  width: calc((100% - 2 * 30px) / 2);

  @media screen and (min-width: 768px) {
    width: calc((100% - 3 * 30px) / 3);
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% - 6 * 30px) / 6);
    margin: 0;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }
  border: 1px solid #afb1b8;
  border-radius: 4px;
`;

export const Icon = styled.svg`
  fill: #afb1b8;
`;
