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
  overflow: hidden;

  .input-flex {
    position: absolute;
    top: 60%;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .bs-icon {
      transform: translateX(-15px);
      color: blue;
      height: 25px;
      width: 25px;

      &:hover {
        color: peru;
        cursor: pointer;
      }
    }
  }
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

export const InputBox = styled.input`
  z-index: 10;
  width: 225px;
  border: 2px solid orange;
  height: 50px;
  font-size: 100%;
  border-radius: 25px;
  padding-left: 15px;
  box-shadow: 1px 1px 11px 0px #aa8c40;

  &:focus {
    outline: none;
  }
`;

export const BackgroundOval = styled.div`
  position: absolute;
  top: 40%;
  height: 60%;
  width: 50%;
  border-radius: 50%;
  transform: rotate(90deg);
  background: white;
`;

export const BackgroundOvalTwo = styled.div`
  position: absolute;
  top: 30%;
  right: 0;
  height: 60%;
  width: 50%;
  border-radius: 50%;
  transform: rotate(90deg);
  background: white;
`;
