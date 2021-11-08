import styled, { keyframes } from 'styled-components';
import { FcCheckmark } from 'react-icons/fc';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';

const translateLeft = keyframes`
0% {
  transform: translateX(0);
} 100% {
  transform: translateX(-100%);
}
`;

const translateRight = keyframes`
0% {
  transform: translateX(-100%);
} 100% {
  transform: translateX(0);
}`;

export const ModalPerformanceContainer = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(49, 136, 231, 1) 22%,
    rgba(83, 155, 226, 1) 100%
  );
  position: relative;
  z-index: -2;
  overflow: hidden;
  animation: 1s ${translateRight};

  &.hidden {
    /* display: none; */
    animation: 1s ${translateLeft} ease;
    transform: translateX(-100%);
  }
`;

export const BackdropOval = styled.div`
  position: absolute;
  top: 25px;
  left: 48px;
  transform: rotate(30deg);
  opacity: 0.8;
  z-index: -1;
  height: 60%;
  width: 60%;
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
        rgba(252, 176, 69, 1) 80%
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
          color: blue;
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
