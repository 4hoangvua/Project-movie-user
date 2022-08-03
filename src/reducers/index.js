import { combineReducers } from "redux";
import banner from "./banner";
import listMovie from "./listMovie";
import listLogo from "./showTime";
import users from "./user";
import movieDetail from "./movieDetail";
import listFilm from "./listFilm";
import tickets from "./ticket";
import singin from "./singin";
const rootReducer = combineReducers({
  ban: banner,
  movie: listMovie,
  show: listLogo,
  user: users,
  movieD: movieDetail,
  listFilm: listFilm,
  ticket: tickets,
  sig: singin,
});
export default rootReducer;
