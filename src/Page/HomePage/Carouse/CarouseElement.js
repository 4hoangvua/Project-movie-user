import styled from "styled-components";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
export const ContainerCarouse = styled.div`
  position: relative;
  width: 100%;
`;
export const ContainerArrow = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 1rem;
`;
export const CardImg = styled.div`
  img {
    width: 100%;
    height: 31.25rem;
    border-radius: 10px;
  }
  ${(props) =>
    props.active
      ? `opacity: 1;
  transition-duration: 0.4s;
 ;`
      : ` opacity: 0;
  transition-duration: 0.5s ease;`}
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
export const ContainerModal = styled.div``;
