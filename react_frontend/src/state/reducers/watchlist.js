const initialState = {
  watchlists: [],
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
        watchlists: state.watchlists.fliter(
          (watchlist) => watchlist.id !== action.payload
        ),
      };
    case "EDIT_WATCHLISTS":
      return {
        ...state,
        watchlists: state.fliter((watchlist) => {
          if (watchlist.id === action.payload.id)
            return (watchlist.name = action.payload.name);
        }),
      };
    default:
      return state;
  }
}
