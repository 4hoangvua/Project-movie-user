import React from "react";
import {
  Nav,
  NavLogo,
  Logo,
  Content,
  NavList,
  NavItem,
  NavContainer,
} from "./NavbarElement";
const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLogo>
          <Logo />
          <Content>Exxmon</Content>
        </NavLogo>
        <NavList>
          <NavContainer>
            <NavItem href="#" disabled={true}>
              TV Series
            </NavItem>
            <NavItem href="#">Movies</NavItem>
            <NavItem href="#" disabled={true}>
              Animes
            </NavItem>
          </NavContainer>
        </NavList>
      </Nav>
    </>
  );
};

export default NavBar;
