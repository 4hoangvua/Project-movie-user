import { combineReducers } from "redux";
import banner from "./banner";
import listMovie from "./listMovie";
import listLogo from "./showTime";
import users from "./user";
import movieDetail from "./movieDetail";
import listFilm from "./listFilm";

const rootReducer = combineReducers({
  ban: banner,
  movie: listMovie,
  show: listLogo,
  user: users,
  movieD: movieDetail,
  listFilm: listFilm,
});
export default rootReducer;
