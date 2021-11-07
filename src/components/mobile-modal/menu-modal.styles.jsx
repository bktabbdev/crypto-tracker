import styled, { keyframes } from 'styled-components';

const openDimensions = keyframes`
0% {
    width: 0;
    height: 0;
} 100% {
  width: 95vw
    height: 480px;
}
`;

const closeDimensions = keyframes`
0% {
  width: 95vw; 
height: 480px
} 100% {
  width: 0; 
  height: 0;
  }
`;

export const Div = styled.div`
  position: fixed;
  top: 78px;
  right: 2.5%;
  border-radius: 12px;
  background: white;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &.initial {
    height: 0;
    width: 0;
  }

  &.open {
    animation: 1s ${openDimensions} ease;
    width: 95vw;
    height: 480px;
  }

  &.close {
    animation: 1s ${closeDimensions} ease;
    width: 0;
    height: 0;
  }

  .title-row {
    display: flex;
    height: 3rem;
    justify-content: flex-start;

    .title {
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 125%;
      position: relative;
      cursor: pointer;

      span {
        display: inline-block;
        position: relative;
      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 24px;
        left: 0;
        width: 0;
        height: 3px;
        background: blue;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 24px;
        right: 0;
        width: 0;
        height: 3px;
        background: blue;
      }

      &.active {
        &:before {
          content: '';
          display: block;
          position: absolute;
          top: 36px;
          left: 0;
          width: 50%;
          height: 3px;
          background: blue;
          transition: 0.5s;
        }

        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 36px;
          right: 0;
          width: 50%;
          height: 3px;
          background: blue;
          transition: 0.5s;
        }
      }
    }
    @media (max-width: 365px) {
      font-size: 85%;
      justify-content: space-evenly;
    }
  }
`;
