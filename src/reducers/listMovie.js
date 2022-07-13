import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const initialState = {
  listMovie: [],
};

export const getListMovie = createAsyncThunk("movie/getListMovie", async () => {
  try {
    const data = await movieAPI.getMovieShowing();
    return data;
  } catch (error) {
    throw error.data;
  }
});
const listMovie = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getListMovie.fulfilled]: (state, { payload }) => {
      state.listMovie = payload;
    },
  },
});
export default listMovie.reducer;
