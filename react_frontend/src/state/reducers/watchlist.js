const initialState = {
  watchlists: [],
  selectedWatchlist: [],
};

export function watchlistReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_WATCHLISTS":
      return {
        ...state,
        watchlists: action.payload,
      };
    case "ADD_WATCHLIST":
      return {
        ...state,
        watchlists: [...state.watchlists, action.payload],
      };
    case "DELETE_WATCHLIST":
      return {
        ...state,
        watchlists: state.watchlists.filter(
          (watchlist) => watchlist.id !== action.payload
        ),
      };
    case "EDIT_WATCHLIST":
      return {
        ...state,
        watchlists: state.watchlists
          .filter((watchlist) => watchlist.id !== action.payload.id)
          .concat(action.payload),
      };
    case "SELECTED_WATCHLIST":
      return {
        ...state,
        selectedWatchlist: action.payload,
      };
    default:
      return state;
  }
}
