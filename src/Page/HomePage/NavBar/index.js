import React, { useState } from "react";
import ModalSibar from "../../../components/modals/ModalSibar";
import {
  Nav,
  NavLogo,
  Logo,
  Content,
  NavList,
  NavItem,
  NavContainer,
  NavToggle,
  Toggle,
} from "./NavbarElement";
const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleToggle = () => {
    setShowModal(!showModal);
  };
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
          <NavToggle onClick={handleToggle}>
            <Toggle></Toggle>
          </NavToggle>
        </NavList>
        <ModalSibar showModal={showModal} setShowModal={setShowModal} />
      </Nav>
    </>
  );
};

export default NavBar;
