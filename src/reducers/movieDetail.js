import { createSlice } from "@reduxjs/toolkit";

const inititalState = {
  movieDetail: [],
};

const userSlice = createSlice({
  name: "movieDetail",
  initialState: inititalState,
  reducers: {
    getMovieDetail: (state, { payload }) => {
      state.movieDetail = payload;
    },
  },
});
export const { getMovieDetail } = userSlice.actions;
export default userSlice.reducer;
