import styled from "styled-components";
import { Link } from "react-router-dom";
export const SideMenu = styled.div`
  & > p {
    color: ${({ theme }) => theme.c.primary};
    opacity: 0.7;
  }
`;
export const SideList = styled.ul`
  list-style: none;
  padding: 0 15px 0 0;
`;
export const SideLogo = styled.div`
  font-size: 1.5625rem;
  color: ${({ theme }) => theme.c.primary};
  opacity: 0.7;
`;
export const SideItem = styled.li`
  text-decoration: none;
  display: flex;
  justify-content: left;
  align-items: center;
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.c.primary};
    opacity: 0.7;
    margin-top: 1.3125rem;
    padding-left: 1rem;
  }
  p {
    position: relative;
    bottom: 0.625rem;
  }

  &:hover {
    a {
      color: ${({ theme }) => theme.c.primary};
      opacity: 1;
      transition: 0.3s ease;
    }
    ${SideLogo} {
      color: ${({ theme }) => theme.c.secondary};
    }
  }
`;

export const SideLogin = styled(Link)`
  text-decoration: none;
  padding: 10px 10px;
  border-radius: 10px;
  display: block;
  width: 100%;
  border: transparent;
  height: 100%;
  background: ${({ theme }) => theme.c.secondary};
  opacity: 0.8;
  transition: 0.3s ease;
  color: #fff !important;
  &:hover {
    opacity: 1;
    color: #fff;
  }
`;
