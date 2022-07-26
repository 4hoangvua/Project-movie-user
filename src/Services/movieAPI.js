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
  getThongTinLichChieuPhim: (maPhim) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        maPhim: maPhim,
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
  getDanhSachPhim: (id) => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: id,
      },
    });
  },
};
export default movieAPI;
