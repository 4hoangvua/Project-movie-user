import axios from "axios";
import store from "../store";
// setup cau hinh mac dinh cho axios
const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIyOS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzIyNzIwMDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MjQxOTYwMH0.SZe3CJl1OkNH-0zfzqOV0CSC8WZ6q2hw64UykpCytT0",
  },
});
axiosClient.interceptors.request.use((config) => {
  if (config.headers) {
    const { accessToken } = store.getState().sig?.userLogin || {};
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
});
axiosClient.interceptors.response.use((reponse) => {
  return reponse.data.content;
});

export default axiosClient;
