import styled from 'styled-components';
import { AiOutlineSortAscending } from 'react-icons/ai';

export const Div = styled.div`
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: -12px;

  h1 {
    color: blue;
    margin-right: 32px;
  }

  h1:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  height: 40px;
  font-size: 150%;
  width: 288px;
  border: none;
  border-bottom: 2px solid #9e62a8;
  position: relative;

  &:focus {
    outline: none;
  }
`;
