import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import {
  ContainterInfo,
  CMoney,
  Money,
  CListTheater,
  ListTheater,
  ListTheaterName,
  CAddress,
  Address,
  AddressName,
  CTheater,
  Theater,
  TheaterName,
  CTimeShow,
  TimeShow,
  TimeShowDetail,
  CNameMovie,
  NameMoive,
  Moive,
  CChoose,
  Choose,
  InfoChoose,
  CButton,
  Button,
  ItemDate,
  ItemHour,
} from "./InfoTicketElement";
import ModalCheck from "../../../components/modals/ModalCheck";
const InfoTicket = ({ ticketInfo }) => {
  const { priceTicket, chair, selectedSeat } = useSelector(
    (state) => state.ticket
  );
  const { userLogin } = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const location = useLocation();
  const handleSubmit = () => {
    if (selectedSeat.length > 0) {
      setIsCheck(!isCheck);
    }
    setShowModal(!showModal);
  };
  return (
    <ContainterInfo>
      <CMoney>
        <Money>{priceTicket + " VND"}</Money>
      </CMoney>
      <CListTheater>
        <ListTheater>Cụm Rạp:</ListTheater>
        <ListTheaterName>{ticketInfo.tenCumRap}</ListTheaterName>
      </CListTheater>
      <CAddress>
        <Address>Địa Chỉ:</Address>
        <AddressName>{ticketInfo.diaChi}</AddressName>
      </CAddress>
      <CTheater>
        <Theater>Rạp:</Theater>
        <TheaterName>{ticketInfo.tenRap}</TheaterName>
      </CTheater>
      <CTimeShow>
        <TimeShow>Ngày giờ chiếu:</TimeShow>
        <TimeShowDetail>
          <ItemDate>
            {dayjs(ticketInfo.ngayChieu).format("DD/MM/YYYY")}
          </ItemDate>
          <ItemHour>{" ~ " + ticketInfo.gioChieu}</ItemHour>
        </TimeShowDetail>
      </CTimeShow>
      <CNameMovie>
        <Moive>Tên phim:</Moive>
        <NameMoive>{ticketInfo.tenPhim}</NameMoive>
      </CNameMovie>
      <CChoose>
        <Choose>Chọn:</Choose>
        <InfoChoose>
          {chair.length == 0 ? "" : "Ghế " + chair.join(" , Ghế ")}
        </InfoChoose>
      </CChoose>
      <CButton>
        <Button onClick={handleSubmit}>Đặt vé</Button>
        {userLogin !== null ? (
          isCheck ? (
            <>
              <ModalCheck showModal={showModal} setShowModal={setShowModal}>
                Đặt vé thành công !
              </ModalCheck>
              {window.location.replace(
                `http://localhost:3000${location.pathname}`
              )}
            </>
          ) : (
            <ModalCheck showModal={showModal} setShowModal={setShowModal}>
              Bạn chưa chọn ghế !
              <br />
              <br />
              <small> Mời bạn chọn ghế.</small>
            </ModalCheck>
          )
        ) : (
          <ModalCheck
            lognin={true}
            showModal={showModal}
            setShowModal={setShowModal}
          >
            Bạn chưa đăng nhập !
            <br />
            <small>Bạn có muốn đăng nhập không ?</small>
          </ModalCheck>
        )}
      </CButton>
    </ContainterInfo>
  );
};

export default InfoTicket;
