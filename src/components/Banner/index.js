import React from "react";
import { useSelector } from "react-redux";

const Banner = () => {
  const { bannerImage } = useSelector((state) => state.ban);
  if (bannerImage.length === 0) return;
  console.log(bannerImage);
  return <div>Banner</div>;
};

export default Banner;
