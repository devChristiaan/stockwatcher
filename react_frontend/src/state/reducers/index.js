import { combineReducers } from "redux";
import { watchlistReducer } from "./watchlist";
import { userReducer } from "./user";
import { loadingReducer } from "./loading";
import { stockReducer } from "./stock";

const reducers = combineReducers({
  watchlistReducer,
  userReducer,
  loadingReducer,
  stockReducer,
});

export default reducers;
