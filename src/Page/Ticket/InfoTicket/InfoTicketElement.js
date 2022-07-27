import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const c = css`
  color: #108f3e;
`;
const cPrimary = css`
  color: #63637a;
`;
const b = css`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
export const ContainterInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: left;
`;

export const CMoney = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  text-align: center;
  color: #8bc34a;
  ${b}
`;
export const Money = styled.h3`
  font-weight: bold;
  line-height: 1.167;
  font-size: 1rem;
  width: 100%;
`;
export const CListTheater = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  ${b}
`;
export const CAddress = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  ${b}
`;
export const CTheater = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  ${b}
`;
export const CTimeShow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  ${b}
`;
export const CNameMovie = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  ${b}
`;
export const CChoose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const CButton = styled.div``;
export const Button = styled.button`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: #d6413a;
  opacity: 0.8;
  padding: 0.625rem;
  transition: 0.3s ease;
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
  border: transparent;
  color: #fff;
  width: 100%;
`;
const fontNameTheater = css`
  font-weight: bold;
  line-height: 1.167;
  font-size: 1rem;
  width: 20%;
  ${cPrimary}
`;
export const ListTheater = styled.span`
  ${fontNameTheater}
`;
export const ListTheaterName = styled.h3`
  font-weight: bold;
  line-height: 1.167;
  font-size: 1rem;
  ${c}
`;
export const Address = styled.span`
  ${fontNameTheater}
`;
export const AddressName = styled.h3`
  font-weight: bold;
  line-height: 1.167;
  font-size: 1rem;
  ${c}
`;
export const Theater = styled.span`
  ${fontNameTheater}
`;
export const TheaterName = styled.h3`
  font-weight: bold;
  line-height: 1.167;
  font-size: 1rem;
  ${c}
  height: 80%;
`;
export const TimeShow = styled.span`
  ${fontNameTheater}
`;
export const TimeShowDetail = styled.h3`
  font-weight: bold;
  line-height: 1.167;
  font-size: 1rem;
`;
export const Moive = styled.span`
  ${fontNameTheater}
`;
export const NameMoive = styled.h3`
  font-weight: bold;
  line-height: 1.167;
  font-size: 1rem;
  ${c}
`;
export const Choose = styled.span`
  ${fontNameTheater}
`;
export const InfoChoose = styled.h3`
  font-weight: bold;
  line-height: 1.167;
  font-size: 1rem;
`;
export const ItemDate = styled.span`
  color: #63637a;
`;
export const ItemHour = styled.span`
  color: #d6413a;
`;
