import styled from "styled-components";

export const NavContainer = styled.nav`
  background: rgba(18, 7, 77);
  width: 100%;
  display: flex;
  height: 96px;
  align-items: center;
  justify-content: center
  flex-direction: column;
`;

export const Span = styled.span`
  text-transform: uppercase;
  transform: translateX(48px);

  h1 {
    margin: 0;
  }

  h1:first-child {
    color: #fff;
  }
  h1:last-child {
    color: #3cb4c9;
    transform: translateX(24px);
  }
`;
