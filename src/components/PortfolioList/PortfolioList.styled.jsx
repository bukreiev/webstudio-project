import styled from 'styled-components';

export const List = styled.ul`
  /* min-width: 480px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0 auto;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -15px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 1200px;
    margin-bottom: 94px;
  }
`;

export const Item = styled.li`
  height: auto;
  position: relative;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  width: 100%;
  max-width: 370px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin: 15px;
    width: 354px;
  }
  @media screen and (min-width: 1200px) {
    width: 370px;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);

    .description {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
