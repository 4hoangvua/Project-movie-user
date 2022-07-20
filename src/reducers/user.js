import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const inititalState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: inititalState,
  reducers: {},
  extraReducers: {},
});
export default userSlice.reducer;
