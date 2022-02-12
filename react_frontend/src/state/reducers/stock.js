const initialState = {
  ticker: "AAPL",
};

export function stockReducer(state = initialState, action) {
  switch (action.type) {
    case "SETTICKER":
      return {
        ...state,
        ticker: action.payload.toUpperCase(),
      };
    default:
      return state;
  }
}