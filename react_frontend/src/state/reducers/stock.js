const initialState = {
  ticker: "AAPL",
};

export function stockReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TICKER":
      return {
        ...state,
        ticker: action.payload,
      };
    default:
      return state;
  }
}
