import { combineReducers } from "redux";
import { watchlistReducer } from "./watchlist";
import { userReducer } from "./user";
import { loadingReducer } from "./loading";
import { stockReducer } from "./stock";
import { watchlistStocksReducer } from "./watchlistStock";

const reducers = combineReducers({
  watchlistReducer,
  userReducer,
  loadingReducer,
  stockReducer,
  watchlistStocksReducer,
});

export default reducers;
