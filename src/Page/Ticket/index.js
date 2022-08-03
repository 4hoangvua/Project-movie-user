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
  Nav,
  NavLogin,
} from "./TicketElement";
import { getInfoTicket } from "../../reducers/ticket";
import { useParams } from "react-router-dom";
import UserInfo from "../../components/UserInfo";
const Ticket = () => {
  const { tickets } = useSelector((state) => state.ticket);
  const { userLogin } = useSelector((state) => state.sig);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoTicket(id));
  }, []);
  if (tickets.length === 0) return;
  return (
    <Container>
      <Nav>
        <NavLogo to="/">
          <Logo />
          <Content>Exxmon</Content>
        </NavLogo>
        {userLogin === null ? null : (
          <NavLogin>
            <UserInfo userLogin={userLogin} />
          </NavLogin>
        )}
      </Nav>
      <ContainerTicket>
        <ContainerListChair>
          <ListChair ticketChair={tickets.danhSachGhe} />
        </ContainerListChair>
        <InfoTheater>
          <InfoTicket ticketInfo={tickets.thongTinPhim} id={id} />
        </InfoTheater>
      </ContainerTicket>
    </Container>
  );
};

export default Ticket;
