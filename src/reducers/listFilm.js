import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const inititalState = {
  listFilm: [],
};

export const getDanhSachPhim = createAsyncThunk(
  "listFilm/getDanhSachPhim",
  async (id) => {
    const data = movieAPI.getDanhSachPhim(id);
    return data;
  }
);
const listFilm = createSlice({
  name: "listFilm",
  initialState: inititalState,
  reducers: {},
  extraReducers: {
    [getDanhSachPhim.fulfilled]: (state, { payload }) => {
      state.listFilm = payload;
    },
  },
});
export default listFilm.reducer;
