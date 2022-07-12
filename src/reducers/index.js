import { combineReducers } from "redux";
import banner from "./banner";

const rootReducer = combineReducers({
  ban: banner,
});
export default rootReducer;
