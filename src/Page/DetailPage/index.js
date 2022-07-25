import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getThongTinLichChieuPhim } from "../../reducers/movieDetail";
import FilmDetail from "./filmDetail";
import FilmTicket from "./flimTicket";
export default function Index() {
  const { maPhim } = useParams();
  console.log(maPhim);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getThongTinLichChieuPhim(maPhim));
  }, []);
  return (
    <>
      <FilmDetail></FilmDetail>
      <FilmTicket></FilmTicket>
    </>
  );
}
