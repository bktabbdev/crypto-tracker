import styled from 'styled-components';

export const Div = styled.div`
  /* height: 405px; */
  /* width: 270px; */
  display: grid;
  grid-template-rows: 135px 264px;
  border-radius: 10px;

  .crypto-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 48px;
    position: relative;
    /* border-bottom: 2px solid blue; */
    background: linear-gradient(
      115deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(55, 96, 191, 1) 12%,
      rgba(83, 202, 226, 1) 100%
    );
    border-radius: 10px 10px 0 0;

    &:first-child {
      color: blue;
    }
  }

  .img-container {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 90px;
    height: 78.75px;
    width: 78.75px;
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
    padding-left: 16px;
    background: linear-gradient(
      25deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(55, 96, 191, 1) 25%,
      rgba(83, 202, 226, 1) 100%
    );
    border-radius: 0 0 10px 10px;

    .price {
      color: #d4395d;
    }
  }

  @media (max-width: 480px) {
    margin: 0;
  }
`;

export const Svg = styled.svg`
  height: 50px;
  overflow: scroll;
`;
