import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavContainer, NavLinkContainer, Span } from './header.styles';
import MobileMenuModal from '../mobile-modal/menu-modal.component';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMobileModal = () => {
    return setOpen(!open);
  };

  return (
    <NavContainer>
      <div className="empty-toggle" style={{ display: 'none' }}></div>
      {open ? <MobileMenuModal open={open} /> : <MobileMenuModal open={open} />}

      <Span>
        <h1>Crypto</h1>{' '}
        <h1>
          C
          <img
            src={require('./../../assets/crypto-logos/btc-logo.svg').default}
            alt=""
          />
          mmerce
        </h1>
      </Span>
      <NavLinkContainer>
        <ul className="desktop">
          <li className="nav-link">Features</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Pricing</li>
        </ul>
        <div className="mobile">
          <button onClick={toggleMobileModal}>
            <div className="btn-overlay"></div>
            {open ? (
              <AiOutlineClose className="icon" />
            ) : (
              <GiHamburgerMenu className="icon" />
            )}{' '}
          </button>
        </div>
      </NavLinkContainer>
    </NavContainer>
  );
};

export default Header;
