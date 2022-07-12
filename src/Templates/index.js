import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../components/Banner";
import { getMovieBanner } from "../reducers/banner";
const HomeTemPlates = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieBanner());
  }, []);
  return (
    <div>
      <Banner />
    </div>
  );
};

export default HomeTemPlates;
