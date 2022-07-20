import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemMovie from "../ItemMovie";
import { getListMovie } from "../../../reducers/listMovie";
import { RowMovie, NextList, NextListMovie } from "./ListMovieElement";
const ListMovie = ({ theme }) => {
  const { listMovie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const NextPage = (evt) => {
    dispatch(getListMovie(evt.target.value));
  };
  return (
    <>
      <RowMovie id="community">
        {listMovie.map((movie, index) => {
          return <ItemMovie key={index} movie={movie} />;
        })}
      </RowMovie>
      <NextListMovie>
        <NextList value="1" onClick={NextPage}>
          1
        </NextList>
        <NextList value="2" onClick={NextPage}>
          2
        </NextList>
      </NextListMovie>
    </>
  );
};

export default ListMovie;
