import styled, { css } from "styled-components";
import { HiOutlineUser } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 100%;
`;
export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const CLogin = styled.div`
  width: 18rem;
  height: 44rem;
`;
export const Form = styled.form`
  background-color: #fff;
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CClose = styled(Link)`
  display: block;
  text-decoration: none;
  transform: translateX(6.5rem);
  width: 3.125rem;
  height: 3.125rem;
  text-align: right;
  padding: 5px;
  cursor: pointer;
`;
export const Close = styled(AiOutlineClose)`
  font-size: 2rem;
`;
const CCLogin = styled.div`
  position: relative;
`;
export const LoginName = styled(CCLogin)``;
export const LoginPassword = styled(CCLogin)``;
export const LoginNameAccount = styled(CCLogin)``;
export const LoginEmail = styled(CCLogin)``;
export const LoginPhone = styled(CCLogin)``;
const Logo = css`
  font-size: 1rem;
  position: absolute;
  top: 7px;
  left: 7px;
  opacity: 0.7;
`;
export const LogoAccount = styled(HiOutlineUser)`
  ${Logo}
`;
export const LogoPassword = styled(RiLockPasswordLine)`
  ${Logo}
`;
export const LogoEmail = styled(AiOutlineMail)`
  ${Logo}
`;
export const LogoPhone = styled(AiOutlinePhone)`
  ${Logo}
`;
export const LogoName = styled(AiOutlineUser)`
  ${Logo}
`;
const Input = styled.input`
  height: 2rem;
  font-size: small;
  padding-left: 1.875rem;
  width: 13.125rem;

  border-radius: 0.625rem;
  border: transparent;
  background: #e9e8ec;
  caret-color: rgb(0, 200, 0);
  &:focus {
    outline: none;
  }
`;
export const Name = styled(Input)``;
export const Password = styled(Input)``;

export const Button = styled.button`
  width: 13.125rem;
  display: block;
  border: transparent;
  border-radius: 0.625rem;
  height: 2rem;
  font-size: small;
  background: rgb(124, 67, 250);
  opacity: 0.8;
  color: #fff;
  transition: 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;
export const Titile = styled.h3`
  font-size: 1rem;
`;
export const Footer = styled.p`
  font-size: small;
`;
export const SignIn = styled(Link)`
  font-size: x-small;
  text-decoration: none;
  color: rgb(124, 67, 250);
  font-weight: bold;
`;

export const ErrorSpan = styled.div`
  font-size: x-small;
  color: red;
  height: 2rem;
  width: 13.125rem;
`;
