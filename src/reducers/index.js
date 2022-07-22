import { combineReducers } from "redux";
import banner from "./banner";
import listMovie from "./listMovie";
import listLogo from "./showTime";
import users from "./user";
import movieDetail from "./movieDetail";

const rootReducer = combineReducers({
  ban: banner,
  movie: listMovie,
  show: listLogo,
  user: users,
  movieD: movieDetail,
});
export default rootReducer;
