import { createSlice } from "@reduxjs/toolkit";

const inititalState = {
  movieDetail: [],
  lichChieu: [],
};

const userSlice = createSlice({
  name: "movieDetail",
  initialState: inititalState,
  reducers: {
    getMovieDetail: (state, { payload }) => {
      state.movieDetail = payload;
    },
    getThongTinLichChieuPhim: (state, { payload }) => {
      state.lichChieu = payload;
    },
  },
});
export const { getMovieDetail, getThongTinLichChieuPhim } = userSlice.actions;
export default userSlice.reducer;
