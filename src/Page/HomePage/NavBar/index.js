import React from "react";
import { Nav, NavLogo, Logo, Content, NavList, NavItem } from "./NavbarElement";
const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLogo>
          <Logo />
          <Content>Exxmon</Content>
        </NavLogo>
        <NavList>
          <NavItem href="#">TV Series</NavItem>
          <NavItem href="#">Movies</NavItem>
          <NavItem href="#">Animes</NavItem>
        </NavList>
      </Nav>
    </>
  );
};

export default NavBar;
