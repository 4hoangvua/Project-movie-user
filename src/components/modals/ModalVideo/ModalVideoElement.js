import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

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
  z-index: 999;
`;
export const ModalWrapper = styled.div`
  position: relative;
  width: 43.75rem;
  height: 28.125rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 999;
`;
export const CloseModalButton = styled(AiOutlineClose)`
  cursor: pointer;
  position: absolute;
  top: -3.125rem;
  right: -3.125rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.c.primary};
`;
