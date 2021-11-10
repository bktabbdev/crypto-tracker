import styled, { keyframes } from 'styled-components';
import { FcCheckmark } from 'react-icons/fc';
import { AiOutlineArrowRight } from 'react-icons/ai';
// import { FaEthereum } from 'react-icons/fa';

const translateLeftOne = keyframes`
0% {
  transform: translateX(0);
} 100% {
  transform: translateX(-100%);
}
`;

const translateRightOne = keyframes`
0% {
  transform: translateX(-100%);
} 100% {
  transform: translateX(0);
}`;

const translateLeftTwo = keyframes`
0% {
  transform: translateX(0);
} 100% {
  transform: translateX(-200%);
}
`;

const translateRightTwo = keyframes`
0% {
  transform: translateX(-200%);
} 100% {
  transform: translateX(0);
}`;

export const ModalPerformanceContainer = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(58, 164, 176);
  background: radial-gradient(
    circle,
    rgba(58, 164, 176, 1) 0%,
    rgba(23, 30, 189, 1) 69%
  );
  position: relative;
  z-index: -2;
  overflow: hidden;
  animation: 1s ${translateRightOne};
`;

export const BackdropOval = styled.div`
  position: absolute;
  top: 40px;
  left: 36px;
  transform: rotate(30deg);
  opacity: 0.4;
  z-index: -1;
  height: 65%;
  width: 65%;
  border-radius: 50%;
  background: #fff;
`;

export const PerformanceImageOne = styled.img`
  position: absolute;
  top: 10%;
  left: 8%;
  height: 30%;
  width: 30%;
  transform: rotate(-10deg);
`;

export const PerformanceFeatureOne = styled.span`
  position: absolute;
  left: 30%;
  width: 100%;
  top: 0%;
  margin: 0;
  padding: 0;

  .feature-title {
    font-weight: bold;
    font-size: 42px;

    h3 {
      background: linear-gradient(
        90deg,
        rgba(59, 101, 242, 1) 0%,
        rgba(95, 29, 253, 1) 31%,
        rgba(252, 176, 69, 1) 60%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .feature-content {
    list-style: none;
    padding: 1rem 0.5rem;

    .feature-item {
      width: 100%;
      transform: translateX(-75px);
      display: flex;
      flex-direction: column;
      font-size: 125%;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;

      .feature-item-title__container {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .learn {
        span {
          display: flex;
          align-items: center;
          cursor: pointer;
          color: #fff;
          font-size: 125%;

          &:hover {
            .right-arrow {
              transform: translateX(20px);
              transition-duration: 0.3s;
            }
          }
        }
      }
    }
  }
`;

export const RightArrow = styled(AiOutlineArrowRight)`
  margin-left: 12px;
`;

export const Checkmark = styled(FcCheckmark)`
  height: 28px;
  width: auto;
`;
