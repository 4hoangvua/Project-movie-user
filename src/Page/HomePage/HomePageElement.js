import styled from "styled-components";
import { device } from "../../common/device";
export const Container = styled.div`
  margin: 3.125rem;
  @media ${device.mobileK} {
    margin: 1rem;
  }
`;
export const ContainerHome = styled.div`
  display: flex;
  justify-content: left;
`;
export const LeftHome = styled.div`
  width: 80%;
  @media ${device.tablet} {
    width: 70%;
  }
`;
export const RightHome = styled.div`
  width: 20%;
  @media ${device.tablet} {
    width: 30%;
  }
`;
export const LeftContent = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
`;
export const LeftSide = styled.div`
  width: 30%;
  @media ${device.tablet} {
    display: none;
  }
`;
export const LeftPage = styled.div`
  width: 70%;
  @media ${device.tablet} {
    width: 100%;
  }
`;
export const ContainerShowTime = styled.div`
  width: 100%;
  margin-top: 3.125rem;
`;
