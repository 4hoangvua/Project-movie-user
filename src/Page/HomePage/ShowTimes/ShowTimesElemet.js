import styled from "styled-components";

export const ContainerShowTime = styled.div`
  height: 45rem;
  background: #fff;
  max-height: 45rem;
  width: 100%;
`;
export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
`;
export const ColLogo = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
`;
export const ColNameShowTime = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  scroll-behavior: smooth;
  overflow-y: scroll;
`;
export const ColShowTime = styled.div`
  width: 65%;
  display: flex;
  justify-content: left;
  align-items: left;
  padding: 1rem;
  overflow-y: scroll;
  flex-wrap: wrap;
`;
export const ContainerLogo = styled.div`
  padding: 10px;
  width: 6.25rem;
  height: 6.25rem;
  cursor: pointer;
  border-right: ${({ isActive }) => (isActive ? `2px solid #d6413a` : "none")};
  &:active {
    transform: scale(0.9);
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  width: 60%;
  height: 60%;
  object-fit: cover;
`;
export const ListTheaterInfo = styled.div`
  width: 100%;
  height: 6.25rem;
  padding: 1rem 1rem 0 1rem;
  cursor: pointer;
  border-right: ${({ isActiveTheater }) =>
    isActiveTheater ? `2px solid #d6413a` : "none"};
  &:active {
    transform: scale(0.9);
  }
`;
export const NameTheater = styled.p`
  color: ${({ theme }) => theme.c.secondary};
`;
export const AddressTheater = styled.p`
  font-size: small;
  color: ${({ theme }) => theme.c.primary};
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const TextAddress = styled.abbr.attrs((props) => ({
  title: props.textAddress,
}))`
  &[title] {
    text-decoration: none !important;
    cursor: default !important;
  }
`;

export const ItemShowTime = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  width: 50%;
  height: 100%;
  margin-bottom: 1rem;
  height: 12.5rem;
`;
export const ItemImage = styled.div`
  width: 20%;
  height: 100%;
`;
export const Image = styled.img.attrs((props) => ({
  src: props.linkImage,
  alt: props.descImage,
}))`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;
export const ItemContent = styled.div`
  width: 80%;
  margin-left: 1rem;
  padding: 0.625rem;
  height: 100%;
`;
export const ShowTimesTheater = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-wrap: wrap;
`;
export const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.c.primary};
`;
export const ItemTime = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  width: 50%;
  height: 100%;
  transition: 0.3s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
`;
export const Item = styled.div`
  font-size: small;
  border: 5px solid ${({ theme }) => theme.bg.primary};
  border-radius: 10px;
  padding: 5px;
`;
export const Col = styled.div`
  padding: 5px;
  margin-bottom: 15px;
  width: 100%;
`;

export const ItemDate = styled.span`
  color: ${({ theme }) => theme.c.primary};
`;
export const ItemHour = styled.span`
  color: ${({ theme }) => theme.c.secondary};
`;
