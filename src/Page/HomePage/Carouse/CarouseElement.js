import styled from "styled-components";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
export const ContainerCarouse = styled.div`
  position: relative;
  width: 100%;
`;
export const ContainerArrow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 1rem;
  width: 100%;
`;
export const CardImg = styled.div`
  height: 100%;
  ${(props) =>
    props.active
      ? `opacity: 1;
  transition-duration: 0.4s;
 ;`
      : ` opacity: 0;
  transition-duration: 0.5s ease;`}
`;
export const Image = styled.img.attrs((props) => ({
  src: props.linkImage,
  alt: props.descImage,
}))`
  width: 100%;
  height: 31.25rem;

  border-radius: 10px;
  object-fit: cover;
`;
export const ArrowLeft = styled(BsArrowLeftCircle)`
  font-size: 2rem;
  color: ${({ theme }) => theme.c.primary};
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
export const ArrowRight = styled(BsArrowRightCircle)`
  font-size: 2rem;
  color: ${({ theme }) => theme.c.primary};
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const ArrowPlay = styled(AiOutlinePlayCircle)`
  font-size: 4rem;
  color: ${({ theme }) => theme.c.secondary};
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
`;
