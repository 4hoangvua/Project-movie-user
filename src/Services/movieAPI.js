import axiosClient from "./axiosClient";

const movieAPI = {
  getMovieShowing: (moviePage) => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhimPhanTrang", {
      params: {
        soTrang: moviePage,
        soPhanTuTrenTrang: 12,
      },
    });
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

  getShowTimeTheaterInfo: (theater) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maHeThongRap: theater,
      },
    });
  },
};
export default movieAPI;
