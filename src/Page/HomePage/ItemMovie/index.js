import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import ModelVideo from "../../../components/modals/ModalVideo";
import {
  ContainerMovie,
  ColCard,
  CardImg,
  CardContent,
  LogoStart,
  CardPlay,
  CardBooking,
  LogoPlay,
  Booking,
  ContainerContent,
  Content,
  DescStart,
} from "./ItemMovieElement";
const ItemMovie = ({ movie }) => {
  let starts = [];
  const [showHover, setShowHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const loopStart = (length) => {
    for (let i = 0; i < length; i++) {
      starts.push(i);
    }
  };
  loopStart(movie.danhGia);
  useEffect(() => {
    setTimeout(() => {}, 200);
  }, [showHover]);
  const handleHover = () => {
    setShowHover(!showHover);
  };

  return (
    <>
      <ContainerMovie onMouseEnter={handleHover}>
        <ColCard onMouseLeave={handleHover}>
          <CardImg>
            <img src={movie.hinhAnh} alt={movie.name} />
            {showHover && (
              <>
                <CardPlay>
                  <LogoPlay onClick={() => setShowModal(!showModal)} />
                </CardPlay>
                <CardBooking>
                  <Booking to={`detail/${movie.maPhim}`}>Booking</Booking>
                </CardBooking>
              </>
            )}
          </CardImg>
          <CardContent>
            <ContainerContent>
              <DescStart>
                {movie.danhGia}.
                {starts.map((start, index) => {
                  if (index > 9) {
                    return;
                  } else {
                    return (
                      <span key={index}>
                        {index === 9 ? (
                          <>
                            <LogoStart /> ...
                          </>
                        ) : (
                          <LogoStart />
                        )}
                      </span>
                    );
                  }
                })}
              </DescStart>
              <Content>
                <abbr title={movie.tenPhim}>
                  {movie.tenPhim.toUpperCase().length > 30
                    ? movie.tenPhim.toUpperCase().substring(0, 30) + "..."
                    : movie.tenPhim.toUpperCase()}
                </abbr>
              </Content>
            </ContainerContent>
          </CardContent>
        </ColCard>
      </ContainerMovie>
      {showModal && (
        <ModelVideo
          showModal={showModal}
          trailer={movie.trailer}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default ItemMovie;
