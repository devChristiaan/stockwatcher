import { GET_WATCHLISTS } from "../actions/types";

const initialState = {
  watchlists: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WATCHLISTS:
      return {
        ...state,
        watchlists: action.payload,
      };
    default:
      return state;
  }
}
