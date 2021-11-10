import styled from 'styled-components';

export const ModalConsultationContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(58, 77, 176);
  background: radial-gradient(
    circle,
    rgba(58, 77, 176, 1) 0%,
    rgba(70, 77, 252, 1) 69%
  );
  position: relative;
`;

export const AbsoluteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  padding-top: 1rem;
`;

export const RocketImage = styled.img`
  width: 100%;
  height: 100%;
  grid-row: 1 / 3;
  grid-column: 4 / 6;
`;

export const BeginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.5rem;
  color: #fff;
  position: relative;
  grid-row: 1 / 4;
  grid-column: 1 / 5;
`;

export const BackgroundOval = styled.div`
  position: absolute;
  top: 50%;
  height: 50%;
  width: 50%;
  background: white;
  z-index: -2;
`;
