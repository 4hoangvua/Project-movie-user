import axiosClient from "./axiosClient";

const movieAPI = {
  getMovieShowing: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim");
  },
  getMovieDetail: (movieID) => {
    return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieID,
      },
    });
  },
  getMovieBanner: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },
};
export default movieAPI;
