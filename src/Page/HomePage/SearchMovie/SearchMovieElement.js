import styled from "styled-components";
import { device } from "../../../common/device";
export const ContainerSearch = styled.div`
  width: 100%;
  padding-left: 1rem;
`;
export const InputSearch = styled.input`
  font-size: 1rem;
  color: ${({ theme }) => theme.c.primary};
  width: 100%;
  border: 1px solid transparent;
  margin-bottom: 5px;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.c.primary};
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: left;
`;
export const ContainerSearchMovie = styled.div`
  max-height: 62.5rem;
  margin-top: 1rem;
  padding-left: 1.5rem;
  height: 100%;
  scroll-behavior: smooth;
  overflow-y: scroll;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;
export const ItemSMovie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: right;
  width: 100%;
  height: 12.5rem;
  margin-bottom: 1rem;
  background: #fff;
  border-radius: 10px;
  padding: 0 5px;
  @media ${device.tablet} {
    box-sizing: content-box;
    height: 20rem;
    margin-bottom: unset;
  }
  @media ${device.mobileK} {
    height: 27rem;
  }
`;
export const ImgMovie = styled.img.attrs((props) => ({
  src: props.linkImage,
  alt: props.descImage,
}))`
  height: 50%;
  width: 50%;
  object-fit: cover;
  @media ${device.mobileK} {
    width: 100%;
  }
`;
export const ContentMovie = styled.div`
  height: 50%;
  padding-top: 5px;
`;
export const Selected = styled.select`
  width: 100%;
  margin-bottom: 0.625rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.c.primary};
`;
export const Option = styled.option`
  font-size: 1rem;
`;
export const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.c.primary};
`;
export const ShowTimeTheaters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;
export const ItemTime = styled.div`
  flex: 1;
  font-size: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 5px;
  border: 1px solid ${({ theme }) => theme.bg.primary};
  &:hover {
    transform: scale(1.08);
  }
`;
export const ItemDate = styled.span`
  color: ${({ theme }) => theme.c.primary};
`;
export const ItemHour = styled.span`
  color: ${({ theme }) => theme.c.secondary};
`;
