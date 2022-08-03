import styled from "styled-components";
import { HiOutlineUser } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
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
  width: 16.25rem;
  height: 29.375rem;
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
export const LoginName = styled.div`
  position: relative;
`;
export const LogoLogin = styled(HiOutlineUser)`
  font-size: 1rem;
  position: absolute;
  top: 7px;
  left: 7px;
  opacity: 0.7;
`;
export const LogoPassword = styled(RiLockPasswordLine)`
  font-size: 1rem;
  position: absolute;
  top: 7px;
  left: 7px;
  opacity: 0.7;
`;
export const Name = styled.input`
  height: 2rem;
  font-size: medium;
  width: 13.125rem;

  border-radius: 0.625rem;
  border: 0px solid;
  background: #e9e8ec;
  caret-color: rgb(0, 200, 0);
  font-size: small;
  padding-left: 1.875rem;
  &:focus {
    outline: none;
  }
`;
export const Password = styled.input`
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
export const LoginPassword = styled.div`
  position: relative;
`;
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
export const SingUp = styled(Link)`
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
