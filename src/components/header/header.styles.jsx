import styled from 'styled-components';

export const NavContainer = styled.nav`
  background: rgba(18, 7, 77);
  width: 100%;
  display: flex;
  height: 84px;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 60px;
  }
`;

export const Span = styled.span`
  text-transform: uppercase;
  transform: translateX(48px);
  display: flex;
  flex-direction: column;

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

  @media (max-width: 480px) {
    color: greenyellow;
    transform: translateX(24px);

    h1 {
      font-size: 100%;
    }
  }
`;
