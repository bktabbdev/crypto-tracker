import styled from 'styled-components';

export const Div = styled.div`
  height: 144px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: -12px;
  padding: 0 12px;

  .sort-icon {
    cursor: pointer;
  }

  h2 {
    color: blue;
    margin-right: 32px;
  }

  @media (max-width: 480px) {
    font-size: 60%;
    height: 180px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    .query-item-one {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;

      Input {
        border-radius: 0;
        border: none;
        border-bottom: 2px solid blue;
        width: 50%;
      }
    }
  }

  .query-item-two {
    h2 {
      display: none;
    }
  }
`;

export const Input = styled.input`
  height: 40px;
  font-size: 150%;
  width: 288px;
  position: relative;
  border: 1px solid black;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;
