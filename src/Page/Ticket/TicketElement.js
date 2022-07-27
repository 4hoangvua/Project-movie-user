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
  width: 40%;
  height: 31.25rem;
`;
export const ContainerListChair = styled.div`
  width: 60%;
`;
export const NavLogo = styled(Link)`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  width: 8rem;
  cursor: pointer;
  text-decoration: none;
  color: unset;
  &:hover {
    color: unset !important;
  }
`;
export const Logo = styled(RiMovie2Line)`
  color: #d6413a;
  font-size: 1.875rem;
`;
export const Content = styled.p`
  margin-top: 5px;
`;
