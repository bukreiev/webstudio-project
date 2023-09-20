import styled from 'styled-components';

export const Project = styled.div`
  position: relative;
  overflow: hidden;
  width: 370px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    max-width: 354px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 370px;

    width: 100%;
  }
`;

export const Descript = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateY(100%);
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  height: 100%;
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: 0.03em;
  color: #ffffff;
  background: rgba(33, 150, 243, 0.9);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Name = styled.div`
  padding: 20px 24px;
  border: 1px solid #eeeeee;
  /* max-width: 480px; */
  width: 100%;
`;

export const Title = styled.p`
  color: #212121;
  font-weight: bold;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.06em;
  margin-bottom: 4px;
`;

export const Type = styled.p`
  color: #757575;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.03em;
`;
