import styled from "styled-components";
import { RiMovie2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
export const ContainerTicket = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
`;
export const InfoTheater = styled.div`
  width: 35%;
  height: 31.25rem;
  margin-left: 0.625rem;
`;
export const ContainerListChair = styled.div`
  width: 65%;
`;
export const NavLogo = styled(Link)`
  font-size: 2rem;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  width: 15rem;
  cursor: pointer;
  text-decoration: none;
  color: unset;
  &:hover {
    color: unset !important;
  }
`;
export const Logo = styled(RiMovie2Line)`
  color: #d6413a;
  font-size: 3rem;
`;
export const Content = styled.p`
  margin-top: 5px;
`;
export const NavLogin = styled.div`
  display: flex;
  background: #d6413a;
  border-radius: 0.625rem;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;
