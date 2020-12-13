import React from "react";
import { HeaderContainer, HeaderLogo } from "./Header-styled";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/hotels">
        <HeaderLogo src="https://images.treebohotels.com/images/hotrod/treebo-new-logo-black.svg" />
      </Link>
    </HeaderContainer>
  );
}
