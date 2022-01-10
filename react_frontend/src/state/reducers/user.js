const initialState = {
  user: [],
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
