import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

export const ReactCheck = styled.div`
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h4`
  font-size: 1rem;
`;
export const CModalCheck = styled.div`
  position: relative;
  width: 31rem;
  height: 18rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  z-index: 999;
  background: #63637a;
  opacity: 0.8;
  border-radius: 0.625rem;
  color: #fff;
`;
const bt = css`
  display: block;
  text-decoration: none;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: transparent;
  background: #d6413a;
  margin-top: 2rem;
  color: #fff;
  opacity: 0.8;
  transition: 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

export const ButtonCheck = styled.button`
  ${bt}
`;
export const ButtonLogin = styled(Link)`
  ${bt}
  &:hover {
    color: #fff !important;
  }
`;
