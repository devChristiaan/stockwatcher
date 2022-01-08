import { GET_WATCHLISTS } from "./types";

const url = process.env.REACT_APP_API_URL;

// Get Watchlits
export const getWatchlists = () => async (dispatch) => {
  let response = await fetch(`${url}watchlist`, {
    method: "GET",
    headers: {
      "content-type": "apllication/json",
    },
  });

  const data = await response.json();

  if (response.status === 200) {
    dispatch({
      type: GET_WATCHLISTS,
      payload: data,
    });
  } else {
    //Log response to find the where the error message will be
  }
};
