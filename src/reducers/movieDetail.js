import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const inititalState = {
  movieDetail: [],
};

export const getThongTinLichChieuPhim = createAsyncThunk(
  "movieDetail/getThongTinLichChieuPhim",
  async (maPhim) => {
    const data = movieAPI.getThongTinLichChieuPhim(maPhim);
    return data;
  }
);
const movieDetail = createSlice({
  name: "movieDetail",
  initialState: inititalState,
  reducers: {},
  extraReducers: {
    [getThongTinLichChieuPhim.fulfilled]: (state, { payload }) => {
      state.movieDetail = payload;
    },
  },
});
export default movieDetail.reducer;
