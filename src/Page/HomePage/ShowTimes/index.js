import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheaterInfo, showMovieTheater } from "../../../reducers/showTime";
import dayjs from "dayjs";
import {
  ContainerShowTime,
  Row,
  ColLogo,
  ContainerLogo,
  Logo,
  ColNameShowTime,
  ColShowTime,
  ListTheaterInfo,
  NameTheater,
  AddressTheater,
  TextAddress,
  ItemShowTime,
  ItemImage,
  ItemContent,
  Title,
  ShowTimesTheater,
  Image,
  ItemTime,
  Item,
  Col,
  ItemDate,
  ItemHour,
} from "./ShowTimesElemet";
const ShowTimes = () => {
  const { listTheaterInfo, listTheater, listMovieTheater } = useSelector(
    (state) => state.show
  );
  const [isActive, setIsActive] = useState({ activeLogo: 0 });
  const [isActiveTheater, setIsActiveTheater] = useState({ activeTheater: 0 });
  const dispatch = useDispatch();
  if (listTheater.length === 0) return;
  const handleTheater = (theater, index) => {
    dispatch(getTheaterInfo(theater));
    setIsActive({ activeLogo: index });
  };
  const handleShowMovie = (listMovie, index) => {
    dispatch(showMovieTheater(listMovie));
    setIsActiveTheater({ activeTheater: index });
  };
  return (
    <>
      <ContainerShowTime id="discovery">
        <Row>
          <ColLogo>
            {listTheaterInfo.map((list, index) => {
              return (
                <ContainerLogo
                  onClick={() => handleTheater(list.maHeThongRap, index)}
                  key={index}
                  isActive={index === isActive.activeLogo ? true : false}
                >
                  <Logo src={list.logo} alt={list.tenHeThongRap} />
                </ContainerLogo>
              );
            })}
          </ColLogo>
          <ColNameShowTime>
            {listTheater[0].lstCumRap.map((list, index) => {
              return (
                <ListTheaterInfo
                  key={index}
                  onClick={() => handleShowMovie(list, index)}
                  isActiveTheater={
                    index === isActiveTheater.activeTheater ? true : false
                  }
                >
                  <NameTheater>{list.tenCumRap}</NameTheater>
                  <TextAddress textAddress={list.diaChi}>
                    <AddressTheater>{list.diaChi}</AddressTheater>
                  </TextAddress>
                </ListTheaterInfo>
              );
            })}
          </ColNameShowTime>
          <ColShowTime>
            {listMovieTheater.danhSachPhim.map((movie, index) => {
              return (
                <ItemShowTime key={index}>
                  <ItemImage>
                    <Image
                      linkImage={movie.hinhAnh}
                      descImage={movie.tenPhim}
                    />
                  </ItemImage>
                  <ItemContent>
                    <Title>{movie.tenPhim}</Title>
                    <ShowTimesTheater>
                      {movie.lstLichChieuTheoPhim.map((time, index) => {
                        if (index > 3) return;
                        return (
                          <ItemTime key={index}>
                            <Col>
                              <Item>
                                {
                                  <>
                                    <ItemDate>
                                      {dayjs(time.ngayChieuGioChieu).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </ItemDate>
                                    <ItemHour>
                                      {dayjs(time.ngayChieuGioChieu).format(
                                        " ~ h:mm A"
                                      )}
                                    </ItemHour>
                                  </>
                                }
                              </Item>
                            </Col>
                          </ItemTime>
                        );
                      })}
                    </ShowTimesTheater>
                  </ItemContent>
                </ItemShowTime>
              );
            })}
          </ColShowTime>
        </Row>
      </ContainerShowTime>
    </>
  );
};

export default ShowTimes;
