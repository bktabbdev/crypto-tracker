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
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .product-one {
    transform: translateX(0);
    transition: 1s;
  }

  .product-two {
    transform: translateX(-25%);
    transition: 1s;
  }

  .product-three {
    transform: translateX(-50%);
    transition: 1s;
  }

  .quarter-gap {
    width: 100%;
  }

  &.initial {
    height: 0;
    width: 0;
  }

  &.open {
    animation: 0.8s ${openDimensions} ease;
    width: 95vw;
    height: 480px;
  }

  &.close {
    animation: 0.8s ${closeDimensions} ease;
    width: 0;
    height: 0;
  }

  .title-row {
    display: flex;
    height: 48px;
    justify-content: space-around;
    list-style: none;

    .title {
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 100%;
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
        top: 36px;
        left: 0;
        width: 0;
        height: 2px;
        background: blue;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 36px;
        right: 0;
        width: 0;
        height: 2px;
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
          background: blue;
          transition: 0.5s;
        }
      }
    }
    @media (max-width: 365px) {
      font-size: 75%;
      justify-content: space-evenly;
    }
  }

  .product-container {
    width: 400%;
    display: flex;

    .point-five {
      width: 0.5%;
    }
  }
`;
