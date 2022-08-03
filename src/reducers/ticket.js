import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const inititalState = {
  tickets: [],
  selectedSeat: [],
  priceTicket: 0,
  chair: [],
};
export const getInfoTicket = createAsyncThunk(
  "ticket/getInfoTicket",
  async (timeTheater) => {
    const data = movieAPI.getInfoTicket(timeTheater);
    return data;
  }
);
export const actionBooking = createAsyncThunk(
  "ticket/actionBooking",
  async (data) => {
    console.log(data);
    return await movieAPI.actionBooking(data);
  }
);
const ticketSlice = createSlice({
  name: "ticket",
  initialState: inititalState,
  reducers: {
    clickChair: (state, { payload }) => {
      const { selected, ...seatData } = payload;
      if (selected) {
        state.selectedSeat = [...state.selectedSeat, seatData];
        state.chair = [...state.chair, seatData.tenGhe];
      } else {
        state.selectedSeat = state.selectedSeat.filter(
          (item) => item.stt !== seatData.stt
        );
        state.chair = state.chair.filter((item) => item !== seatData.stt);
      }
      state.priceTicket = state.selectedSeat.reduce((total, seat) => {
        return total + seat.giaVe;
      }, 0);
    },
  },
  extraReducers: {
    [getInfoTicket.fulfilled]: (state, { payload }) => {
      state.tickets = payload;
    },
    [actionBooking.rejected]: (state, { payload }) => {
      alert(payload);
    },
  },
});
export const { clickChair, successBooking, checkBooking } = ticketSlice.actions;
export default ticketSlice.reducer;
