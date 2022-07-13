import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";
export const Nav = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  /* background: red; */
`;
export const NavLogo = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  width: 30%;
`;
export const Logo = styled(RiMovie2Line)`
  color: #d6413a;
  font-size: 1.875rem;
`;
export const Content = styled.p`
  margin-top: 5px;
`;
export const NavList = styled.div`
  width: 70%;
  display: flex;
  justify-content: left;
  align-items: center;
  overflow: hidden;
`;
export const NavItem = styled.a`
  display: block;
  text-decoration: none;
  margin-right: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.c.primary};
  opacity: 0.7;
  &:hover {
    border-bottom: 2px solid #d6413a;
    color: ${({ theme }) => theme.c.primary} !important;
    opacity: 1;
  }
`;
