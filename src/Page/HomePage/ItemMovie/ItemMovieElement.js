import styled from "styled-components";
import { AiOutlineStar, AiOutlinePlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { device } from "../../../common/device";
export const ContainerMovie = styled.div`
  width: 25%;
  margin-bottom: 1rem;
  cursor: pointer;
  @media ${device.tablet} {
    width: 50%;
  }
`;
export const ColCard = styled.div`
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding-right: 15px;
  &:hover {
    opacity: 0.8;
    transition: 0.3s ease;
  }
`;
export const CardImg = styled.div`
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  overflow: hidden;
  box-shadow: rgba(159, 179, 191, 0.25) 0px 54px 55px,
    rgba(159, 179, 191, 0.12) 0px -12px 30px,
    rgba(159, 179, 191, 0.12) 0px 4px 6px,
    rgba(159, 179, 191, 0.17) 0px 12px 13px,
    rgba(159, 179, 191, 0.09) 0px -3px 5px;
  height: 75%;
  /* overflow: hidden; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
  }
`;
export const CardContent = styled.div`
  position: relative;
  height: 25%;
  border: 1px solid rgba(159, 179, 191, 0.5);
  border-top-color: transparent;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  padding: 5px 10px;
`;
export const LogoStart = styled(AiOutlineStar)`
  color: ${({ theme }) => theme.c.start};
  font-size: 0.7rem;
`;
export const CardPlay = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  transition: 0.3s ease;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
export const CardBooking = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
`;
export const Booking = styled(Link)`
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 10px;
  display: block;
  width: 100%;
  border: transparent;
  height: 100%;
  background: ${({ theme }) => theme.c.secondary};
  color: #fff;
  opacity: 0.8;
  transition: 0.3s ease;
  &:hover {
    opacity: 1;
    color: #fff;
  }
`;
export const LogoPlay = styled(AiOutlinePlayCircle)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.c.secondary};
  @media ${device.tablet} {
    font-size: 4rem;
  }
`;
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: left;
`;
export const Content = styled.abbr.attrs((props) => ({
  title: props.nameMovie,
}))`
  padding-top: 5px;
  height: 50%;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.c.primary};
  font-style: italic;
  &[title] {
    text-decoration: none !important;
    cursor: default !important;
  }
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
export const DescStart = styled.span`
  height: 50%;
  font-size: 1rem;
  padding-right: 5px;
  color: ${({ theme }) => theme.c.secondary};
`;
