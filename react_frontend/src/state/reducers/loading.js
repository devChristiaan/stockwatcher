const initialState = {
  loading: true,
};

export function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: !action.payload,
      };
    default:
      return state;
  }
}
