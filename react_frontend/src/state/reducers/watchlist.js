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
    default:
      return state;
  }
}
