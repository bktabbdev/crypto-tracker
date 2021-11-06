import styled, { keyframes } from 'styled-components';

const setHeight = keyframes`
0% {
    height: 0;
} 100% {
    height: 480px
}
`;

export const Div = styled.div`
  position: fixed;
  top: 78px;
  left: 2.5%;
  width: 95vw;
  height: 480px;
  border-radius: 12px;
  background: white;
  overflow: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr 2fr;
  overflow-y: scroll;
  animation: 1s ${setHeight} ease;

  .title-row {
    display: flex;
    grid-column-start: 1;
    grid-column-end: 3;
    justify-content: space-evenly;

    .title {
      font-weight: 500;
      position: relative;
      cursor: pointer;
      p {
        display: inline-block;
        position: relative;
      }
      .active {
        &:before {
          content: '';
          display: block;
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 5px;
          background: blue;
        }
      }
    }
  }

  .content-row {
    img {
      height: 75%;
      width: 75%;
      margin: auto;
    }
  }
`;
