import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const initialState = {
  listMovie: [],
};

export const getListMovie = createAsyncThunk(
  "movie/getListMovie",
  async (page) => {
    try {
      const data = await movieAPI.getMovieShowing(page);
      return data;
    } catch (error) {
      throw error.data;
    }
  }
);
const listMovie = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getListMovie.fulfilled]: (state, { payload }) => {
      state.listMovie = payload.items;
    },
  },
});
export default listMovie.reducer;
