const initialState = {
  watchlistStocks: [],
};

export function watchlistStocksReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_WATCHLIST_STOCKS":
      return {
        ...state,
        watchlistStocks: action.payload,
      };
    case "ADD_WATCHLIST_STOCKS":
      return {
        ...state,
        watchlistStocks: [...state, action.payload],
      };
    default:
      return state;
  }
}
