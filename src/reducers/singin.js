import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";
import { token } from "../Services/token";
let user = null;
if (localStorage.getItem("user")) {
  user = JSON.parse(localStorage.getItem("user"));
}
const inititalState = {
  userLogin: user,
  infoUser: {},
};

export const userLoginActive = createAsyncThunk(
  "userLogin/userLoginActive",
  async (info) => {
    const data = await movieAPI.accountUser(info);
    return data;
  }
);
export const userRegister = createAsyncThunk(
  "userLogin/userRegister",
  async (info) => {
    await movieAPI.userRegister(info);
  }
);
export const getInfoUser = createAsyncThunk(
  "userLogin/getInfoUser",
  async (account) => {
    const data = await movieAPI.getInfoUser(account);
    console.log(data);
    return data;
  }
);
export const updateInfoUser = createAsyncThunk(
  "userLogin/updateInfoUser",
  async (data) => {
    return await movieAPI.updateInfoUser(data);
  }
);
const userSlice = createSlice({
  name: "userLogin",
  initialState: inititalState,
  reducers: {
    deleteUserLoginAdmin: (state) => {
      state.userLogin = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [userLoginActive.fulfilled]: (state, { payload }) => {
      state.userLogin = payload;
      localStorage.setItem("user", JSON.stringify(payload));
      alert("Đăng nhập thành công");
    },
    [userLoginActive.rejected]: (state, { payload }) => {
      alert("Tài khoản hoặc mật khẩu không chính xác !");
    },
    [userRegister.fulfilled]: () => {
      alert("Đăng ký thành công");
    },
    [userRegister.rejected]: (state, { payload }) => {
      alert("Tài khoản hoặc email đã tồn tại");
    },
    [getInfoUser.fulfilled]: (state, { payload }) => {
      state.infoUser = payload;
    },
    [getInfoUser.rejected]: (state, { payload }) => {
      state.userLogin = { ...state.userLogin, accessToken: token };
    },
    [updateInfoUser.fulfilled]: (state, { payload }) => {
      const data = [...state.infoUser.thongTinDatVe];
      state.infoUser = { ...payload, thongTinDatVe: [...data] };
      state.userLogin = {
        ...state.userLogin,
        email: payload.email,
        hoTen: payload.hoTen,
        soDT: payload.soDT,
      };
      localStorage.setItem("user", JSON.stringify(state.userLogin));
      alert("Cập nhật thành công");
    },
    [updateInfoUser.rejected]: (state, { payload }) => {
      alert("Lỗi");
    },
  },
});
export const { deleteUserLoginAdmin } = userSlice.actions;
export default userSlice.reducer;
