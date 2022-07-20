import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const initialState = {
  listTheaterInfo: [],
  listTheater: [],
  listMovieTheater: [],
};

export const getShowTimeTheaterInfo = createAsyncThunk(
  "showtime/getShowTimeTheaterInfo",
  async (theater) => {
    try {
      const data = await movieAPI.getShowTimeTheaterInfo(theater);
      return data;
    } catch (error) {
      throw error.data;
    }
  }
);
const listLogo = createSlice({
  name: "logo",
  initialState: initialState,
  reducers: {
    getTheaterInfo: (state, { payload }) => {
      state.listTheater = state.listTheaterInfo.filter(
        (theater) => payload === theater.maHeThongRap
      );
    },
    showMovieTheater: (state, { payload }) => {
      state.listMovieTheater = payload;
    },
  },
  extraReducers: {
    [getShowTimeTheaterInfo.fulfilled]: (state, { payload }) => {
      state.listTheaterInfo = payload;
      state.listTheater = state.listTheaterInfo.filter(
        (theater) => "BHDStar" === theater.maHeThongRap
      );
      state.listMovieTheater = state.listTheater[0].lstCumRap[0];
    },
  },
});
export const { getTheaterInfo, showMovieTheater } = listLogo.actions;
export default listLogo.reducer;
