import { combineReducers } from "redux";
import { smurfListReducer as smurfs } from "./smurfListReducer";
import { addSmurfReducer as add } from "./addSmurfReducer";

export default combineReducers({
  smurfs,
  add
});