import React from "react";

import { NavContainer, Span } from "./header.styles";

const Header = () => {
  return (
    <NavContainer>
      <Span>
        <h1>Crypto</h1> <h1>Tracker</h1>
      </Span>
    </NavContainer>
  );
};

export default Header;
