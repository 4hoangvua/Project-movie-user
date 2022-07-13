import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Carouse from "../Carouse";
import { getMovieBanner } from "../../../reducers/banner";
import { getListMovie } from "../../../reducers/listMovie";
import ListMovie from "../ListMovie";

const ContentPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieBanner());
    dispatch(getListMovie());
  }, []);
  return (
    <>
      <Carouse />
      <ListMovie />
    </>
  );
};

export default ContentPage;
