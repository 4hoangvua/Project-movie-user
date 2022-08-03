import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";
export const SideMenu = styled.div`
  & > p {
    font-size: 1rem;
    color: #63637a;
    opacity: 0.7;
  }
`;
export const SideList = styled.ul`
  list-style: none;
  padding: 0 15px 0 0;
`;
export const SideLogo = styled.div`
  font-size: 1.5625rem;
  color: #63637a;
  opacity: 0.7;
`;
export const SideItem = styled.li`
  text-decoration: none;
  display: flex;
  justify-content: left;
  align-items: center;
  & > a {
    text-decoration: none;
    color: #63637a;
    opacity: 0.7;
    margin-top: 1.3125rem;
    font-size: 1rem;
    padding-left: 1rem;
  }

  &:hover {
    a {
      color: #63637a;
      opacity: 1;
      transition: 0.3s ease;
    }
    ${SideLogo} {
      color: #d6413a;
    }
  }
`;

export const Side = css`
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
export const SideLogin = styled(Link)`
  ${Side}
`;
export const SideLogout = styled.div`
  ${Side}
  cursor: pointer;
  display: flex;
`;
export const LogoLogin = styled(AiOutlineLogin)`
  font-size: 2rem;
  margin-right: 0.625rem;
`;
export const LogoLogout = styled(HiOutlineLogin)`
  font-size: 2rem;
  margin-right: 0.625rem;
`;
