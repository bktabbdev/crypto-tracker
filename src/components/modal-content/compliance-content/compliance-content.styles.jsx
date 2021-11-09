import styled from 'styled-components';

import { BsFillPatchCheckFill } from 'react-icons/bs';

export const ModalComplianceContainer = styled.div`
  width: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(58, 77, 176);
  background: radial-gradient(
    circle,
    rgba(58, 77, 176, 1) 0%,
    rgba(70, 77, 252, 1) 69%
  );
  position: relative;
  z-index: -2;
  overflow: hidden;
`;

export const TitleRow = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat() (3, 1fr);
  grid-row-gap: 1rem;
  height: 40%;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 2;
  padding: 2rem 1rem;

  .title-topleft {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1 / 3;
  }

  .title-center {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    transform: scale(1.5);
    position: relative;
    z-index: 2;
    color: #edaf3b;
  }

  .title-bottomright {
    display: flex;
    padding-right: 1rem;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-column: 3 / 4;
    grid-row: 3 / 4;
  }

  > :first-child,
  > :last-child {
    color: #fff;
    opacity: 0.8;
    z-index: 1;
    font-weight: 700;
  }
`;

export const PciContainer = styled.div`
  height: 90%;
  max-height: 244px;
  width: 90%;
  background: white;
  border-radius: 5px;
  margin: 0.5rem 0;
  box-shadow: rgba(0, 0, 0, 0.35) 3px 5px 15px;
  position: relative;
  display: flex;
  flex-direction: column;

  .absolute {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
  }
`;

export const FlexRow = styled.div`
  height: 33%;
  max-height: 72px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const GridCheck = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
`;

export const GridInfo = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: flex-start;

  ul {
    list-style: none;
  }

  li {
    font-size: 10pt;
    color: blueviolet;
  }
`;

export const Checkmark = styled(BsFillPatchCheckFill)`
  color: blue;
  height: 25px;
  width: 25px;
`;

export const BackDropOvalOne = styled.div`
  position: absolute;
  width: 110%;
  height: 20%;
  background: #fff;
  opacity: 0.1;
  top: 15%;
  left: 50%;
  transform: translateX(-75%) rotate(-45deg);
  border-radius: 50%;
`;

export const BackDropOvalTwo = styled.div`
  position: absolute;
  width: 60%;
  height: 20%;
  background: #fff;
  opacity: 0.3;
  top: 15%;
  left: 50%;
  transform: translateX(-25%) rotate(45deg);
  border-radius: 50%;
`;
