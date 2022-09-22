import styled, { css } from "styled-components";
import { HiOutlineUser } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiOutlineClose,
} from "react-icons/ai";

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const CModalAccount = styled.div`
  position: relative;
  width: 80vw;
  height: 80vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  background: #63637a;
  opacity: 0.8;
  border-radius: 0.625rem;
  color: #fff;
`;
export const ReactAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const ContenAccount = styled.div`
  height: 50%;
`;
export const ContentHistory = styled.div`
  height: 50%;
  width: 100%;
  overflow-y: auto;
`;
export const CColHis = styled.div`
  height: 100%;
`;
export const Row = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  align-items: left;
  padding: 0 4rem;
`;
export const Col = styled.div`
  width: 50%;
  position: relative;
  /* display: flex; */
  /* justify-content: space-around; */
  padding: 0 1rem;
  color: red;
`;

const Logo = css`
  font-size: 1rem;
  position: absolute;
  top: 7px;
  left: 1.5625rem;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 0.8rem;
  padding-left: 1.875rem;
  margin-bottom: 1rem;
  border-radius: 0.625rem;
  border: transparent;
  background: #e9e8ec;
  caret-color: rgb(0, 200, 0);
  &:focus {
    outline: none;
  }
`;
export const Name = styled(Input)``;
export const Button = styled.button`
  width: 30%;
  display: block;
  border: transparent;
  border-radius: 0.625rem;
  height: 2rem;
  font-size: 0.8rem;
  background: rgb(124, 67, 250);
  opacity: 0.8;
  color: #fff;
  transition: 0.3s ease;
  &:hover {
    opacity: 1;
  }
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
export const LogoUser = styled(AiOutlineUsergroupAdd)`
  ${Logo}
`;

export const ErrorSpan = styled.div`
  font-size: x-small;
  color: #fff;
  height: 2rem;
  width: 13.125rem;
  display: block;
`;
export const CloseModalButton = styled(AiOutlineClose)`
  cursor: pointer;
  position: absolute;
  top: 0.625rem;
  left: 0.625rem;
  font-size: 2rem;
  color: #fff;
`;
