import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 60px;
  margin-bottom: 30px;

  /* margin-top: 0; */

  @media screen and (min-width: 768px) {
    justify-content: center;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 50px;
    justify-content: center;
  }
`;

export const Item = styled.li`
  margin-right: 8px;
  margin-bottom: 8px;

  &:nth-last-of-type(-n + 2) {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  color: #212121;
  background-color: #f5f4fa;
  height: 38px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.63;
  text-align: center;
  letter-spacing: 0.03em;
  border-radius: 4px;
  border: none;
  padding: 6px 22px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
    background-color: #2196f3;
    color: #ffffff;
    cursor: pointer;
  }
`;
