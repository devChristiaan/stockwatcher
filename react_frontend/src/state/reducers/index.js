import { combineReducers } from "redux";
import { watchlistReducer } from "./watchlist";
import { userReducer } from "./user";

const reducers = combineReducers({
  watchlistReducer,
  userReducer,
});

export default reducers;
