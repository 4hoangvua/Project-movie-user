import styled from "styled-components";
import { RiMovie2Line } from "react-icons/ri";
export const Nav = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
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
  max-height: 4.375rem;
`;
export const NavItem = styled.a`
  border-bottom: 2px solid transparent;
  ${(props) =>
    props.disabled
      ? `
    color: currentColor;
    cursor: not-allowed;
    opacity: 0.7;
    text-decoration: none;`
      : ` 
      border-bottom: 2px solid #d6413a;
 `}
  color: ${({ theme }) => theme.c.primary} !important;
  display: block;
  text-decoration: none;
  margin-right: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.c.primary};
  opacity: 1;
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;
