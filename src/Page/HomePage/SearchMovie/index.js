import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import {
  ContainerSearch,
  InputSearch,
  ContainerSearchMovie,
  Row,
  ItemSMovie,
  ImgMovie,
  ContentMovie,
  Search,
  Selected,
  Option,
  Title,
  ShowTimeTheaters,
  ItemTime,
  ItemDate,
  ItemHour,
} from "./SearchMovieElement";
const SearchMovie = () => {
  const { listTheaterInfo } = useSelector((state) => state.show);
  const [isSelected, setIsSelected] = useState();
  const [isMovie, setIsMovie] = useState();
  const isMouted = useRef(false);
  const theater = useRef(0);
  const movie = useRef(0);
  useEffect(() => {
    if (!isMouted.current) {
      isMouted.current = true;
      return;
    }
    setIsSelected(listTheaterInfo[theater.current].lstCumRap);
    setIsMovie(
      listTheaterInfo[theater.current].lstCumRap[movie.current].danhSachPhim
    );
  }, [listTheaterInfo]);
  const handleSelected = (evt) => {
    theater.current = evt.target.value;
    setIsSelected(listTheaterInfo[theater.current].lstCumRap);
    setIsMovie(listTheaterInfo[theater.current].lstCumRap[0].danhSachPhim);
  };
  const handleSelected1 = (evt) => {
    movie.current = evt.target.value;
    setIsMovie(
      listTheaterInfo[theater.current].lstCumRap[movie.current].danhSachPhim
    );
  };
  const handleSearch = async (evt) => {
    if (evt.key !== "Enter") return;

    let nameMoive = evt.target.value;
    let index = isMovie.findIndex((movie) =>
      movie.tenPhim.toLowerCase().includes(nameMoive)
    );
    if (index !== -1) {
      console.log("ok");
      setIsMovie([
        listTheaterInfo[theater.current].lstCumRap[movie.current].danhSachPhim[
          index
        ],
      ]);
    }
    evt.target.value = "";
  };
  return (
    <ContainerSearch>
      <Search>
        <InputSearch
          onKeyDown={handleSearch}
          type="text"
          placeholder="Enter movie..."
        />
      </Search>
      <Selected onChange={handleSelected}>
        {listTheaterInfo.map((list, index) => {
          return (
            <Option value={index} key={index}>
              {list.maHeThongRap}
            </Option>
          );
        })}
      </Selected>
      <Selected onChange={handleSelected1}>
        {isSelected?.map((list, index) => {
          return (
            <Option value={index} key={index}>
              {list.tenCumRap}
            </Option>
          );
        })}
      </Selected>
      <ContainerSearchMovie>
        <Row>
          {isMovie?.map((movie, index) => {
            // if (index > 7) return;
            return (
              <ItemSMovie key={index}>
                <ImgMovie linkImage={movie.hinhAnh} descImage={movie.tenPhim} />
                <ContentMovie>
                  <Title>{movie.tenPhim}</Title>
                  <ShowTimeTheaters>
                    {movie.lstLichChieuTheoPhim.map((time, index) => {
                      if (index > 2) return;
                      return (
                        <ItemTime key={index} to={`ticket/${time.maLichChieu}`}>
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
                        </ItemTime>
                      );
                    })}
                  </ShowTimeTheaters>
                </ContentMovie>
              </ItemSMovie>
            );
          })}
        </Row>
      </ContainerSearchMovie>
    </ContainerSearch>
  );
};

export default SearchMovie;
