import styled from "styled-components";

export const ContainerFooter = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
  background: #333;
  color: ${({ theme }) => theme.c.primary};
`;
export const ContainerLogo = styled.div`
  text-align: center;
`;
export const Row = styled.div`
  max-width: 31.25rem;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
  padding-bottom: 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.c.primary};
`;
export const Col = styled.div`
  width: 100%;
`;
export const Item = styled.div`
  margin-right: 0.625rem;
  padding: 5px;
  width: 3.125rem;
  height: 3.125rem;
`;
export const Logo = styled.img.attrs((props) => ({
  src: props.LinkImage,
  alt: props.nameImage,
}))`
  width: 100%;
  height: 100%;
`;
export const ContainerForMe = styled.div`
  text-align: center;
  padding-bottom: 2rem;
`;
