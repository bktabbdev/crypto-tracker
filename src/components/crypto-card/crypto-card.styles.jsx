import styled from 'styled-components';

export const Div = styled.div`
  height: 450px;
  width: 350px;
  border: 3px solid black;
  margin: 2rem;
  display: grid;
  grid-template-rows: 75px 150px 225px;
  grid-gap: 0.5rem;

  .crypto-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 64px;

    &:first-child {
      margin: 0 auto;
      text-align: center;
      color: blue;
    }
  }

  .img-container {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 10;
  }

  .img-container:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: red;
    z-index: 1;
  }

  .crypto-image {
    width: 50%;
    height: 50%;
    border: 1px solid black;
    margin: 0 auto;
    transform: translateY(50%);
    z-index: 10;
    background: #fff;
  }
`;

export const Svg = styled.svg`
  height: 50px;
  overflow: scroll;
`;
