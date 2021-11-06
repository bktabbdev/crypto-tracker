import styled from 'styled-components';

export const NavContainer = styled.nav`
  background: rgba(18, 7, 77);
  width: 100%;
  display: flex;
  height: 96px;
  border-bottom-left-radius: 25%;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  position: fixed;

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 72px;
    overflow-x: hidden;
    border-bottom-right-radius: 25%;

    span {
      transform: scale(0.75);
    }
  }
`;

export const NavLinkContainer = styled.div`
  flex-basis: 50%;
  color: #fff;
  height: 100%;

  .mobile {
    display: none;

    button {
      border: none;
      background: none;
      height: 24px;
      width: 60px;
      cursor: pointer;
      position: relative;
      border-bottom-right-radius: 25px;
      border-bottom-left-radius: 25px;
      border-top-right-radius: 25px;
      border-top-left-radius: 25px;

      .btn-overlay {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
        /* background: yellow; */
      }

      .icon {
        position: absolute;
        top: 0;
        left: 25%;
        height: 24px;
        width: 30px;
        color: #3188e7;
      }
    }
  }

  ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    list-style: none;
    align-items: center;
    margin-right: 12px;

    li {
      display: flex;
      justify-content: center;
      background: rgb(127, 87, 227);
      background: linear-gradient(
        201deg,
        rgba(127, 87, 227, 1) 22%,
        rgba(164, 83, 226, 1) 100%
      );
      padding: 12px;
      border-radius: 6px;
      width: 96px;
      position: relative;

      &:after {
        content: '';
        display: block;
        position: absolute;
        border-radius: 6px;
        opacity: 0;
      }

      &:hover {
        cursor: pointer;
        transform: scale(1.05);
        background: linear-gradient(
          201deg,
          rgba(164, 83, 226, 1) 22%,
          rgba(94, 55, 191, 1) 100%
        );
        transition: 0.3s;

        &:after {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #a453e2;
          opacity: 0.3;
          transition: 0.3s;
          transform-origin: bottom;
        }
      }
    }
  }

  @media (max-width: 480px) {
    ul {
      display: none;
    }

    .mobile {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 2rem;
      flex: 33%;
      height: 100%;
    }
  }

  @media (min-width: 850px) {
    flex-basis: 428px;
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
    text-align: center;
    color: #3cb4c9;
    transform: translateX(24px);

    img {
      height: 32px;
      transform: translateY(6px);
    }
  }
`;
