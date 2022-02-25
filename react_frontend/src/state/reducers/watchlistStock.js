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
        watchlistStocks: [...state.watchlistStocks, action.payload],
      };
    case "DELETE_WATCHLIST_STOCK":
      return {
        ...state,
        watchlistStocks: state.watchlistStocks.filter(
          (stock) => stock.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
