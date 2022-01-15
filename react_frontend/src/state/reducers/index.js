import { combineReducers } from "redux";
import { watchlistReducer } from "./watchlist";
import { userReducer } from "./user";
import { loadingReducer } from "./loading";

const reducers = combineReducers({
  watchlistReducer,
  userReducer,
  loadingReducer,
});

export default reducers;
