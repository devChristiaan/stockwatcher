const initialState = {
  user: [],
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: [],
      };
    default:
      return state;
  }
}
