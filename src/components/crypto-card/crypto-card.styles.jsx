import styled from 'styled-components';

export const Div = styled.div`
  height: 450px;
  width: 350px;
  border: 3px solid black;
  margin: 2rem;
  display: grid;
  grid-template-rows: 150px 300px;

  .crypto-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 64px;
    position: relative;
    border-bottom: 2px solid blue;

    &:first-child {
      color: blue;
    }
  }

  .img-container {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 100px;
    height: 87.5px;
    width: 87.5px;
    z-index: 10;
  }

  .crypto-image {
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    margin: 0 auto;
    z-index: 10;
    background: #fff;
  }

  .crypto-data {
    padding-top: 16px;

    .price {
      color: #38c773;
    }
  }
`;

export const Svg = styled.svg`
  height: 50px;
  overflow: scroll;
`;
