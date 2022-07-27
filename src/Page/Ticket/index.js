import React, { useEffect } from "react";
import InfoTicket from "./InfoTicket";
import ListChair from "./ListChair";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  ContainerTicket,
  ContainerListChair,
  InfoTheater,
  NavLogo,
  Logo,
  Content,
} from "./TicketElement";
import { getInfoTicket } from "../../reducers/ticket";
import { useParams } from "react-router-dom";
const Ticket = () => {
  const { tickets } = useSelector((state) => state.ticket);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoTicket(id));
  }, []);
  if (tickets.length === 0) return;
  return (
    <Container>
      <NavLogo to="/">
        <Logo />
        <Content>Exxmon</Content>
      </NavLogo>
      <ContainerTicket>
        <ContainerListChair>
          <ListChair ticketChair={tickets.danhSachGhe} />
        </ContainerListChair>
        <InfoTheater>
          <InfoTicket ticketInfo={tickets.thongTinPhim} />
        </InfoTheater>
      </ContainerTicket>
    </Container>
  );
};

export default Ticket;
