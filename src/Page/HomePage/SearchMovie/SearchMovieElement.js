import styled from "styled-components";
export const ContainerSearch = styled.div`
  width: 100%;
  padding-left: 1rem;
`;
export const InputSearch = styled.input`
  width: 100%;
  border: transparent;
  margin-bottom: 5px;
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
  overflow: hidden;
  padding: 0 5px;
`;
export const ImgMovie = styled.img.attrs((props) => ({
  src: props.linkImage,
  alt: props.descImage,
}))`
  height: 50%;
  width: 6.25rem;
  object-fit: cover;
  object-position: top;
`;
export const ContentMovie = styled.div`
  height: 50%;
  padding-top: 5px;
`;
export const Selected = styled.select`
  width: 100%;
  margin-bottom: 0.625rem;
`;
export const Option = styled.option``;
export const Title = styled.div`
  font-size: small;
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
  font-size: small;
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
