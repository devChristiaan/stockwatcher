import axios from "axios";

const urlAPI = process.env.REACT_APP_API_URL;

// Get Watchlits
const getWatchlists = (authTokens) => (dispatch) => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${authTokens.access}`;
  axios
    .get(`${urlAPI}watchlist/`)
    .then((res) => {
      dispatch({
        type: "GET_WATCHLISTS",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getWatchlists };
