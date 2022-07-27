import styled from "styled-components";
import { RiMovie2Line } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";
import { device } from "../../../common/device";
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
  width: 50%;
  color: #d6413a;
  font-size: 1.875rem;
  @media ${device.desktopL} {
    width: 20%;
    font-size: 40px;
  }
  @media ${device.tablet} {
    margin-top: unset;
    font-size: 30px;
    width: 30%;
  }
`;
export const Content = styled.p`
  color: ${({ theme }) => theme.c.primary};
  width: 50%;
  font-size: 1rem;
  @media ${device.desktopL} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    margin-top: unset;
    font-size: 16px;
  }
`;
export const NavList = styled.div`
  width: 70%;
  max-height: 4.375rem;
  position: relative;
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
  font-size: 1.5rem;
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  @media ${device.mobileK} {
    display: none;
  }
`;
export const NavToggle = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  @media ${device.tablet} {
    display: flex;
  }
`;
export const Toggle = styled(GoThreeBars)`
  font-size: 2rem;
  color: ${({ theme }) => theme.c.primary};
  position: absolute;
  top: 0;
  right: 0;
`;
