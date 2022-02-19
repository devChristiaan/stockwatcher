import axiosInstance from "../../utils/axiosInstance";

const urlAPI = process.env.REACT_APP_API_URL;

// Get Watchlits
const getWatchlistStocks = (watchlist) => (dispatch) => {
  axiosInstance
    .get(`${urlAPI}watchliststocks/${watchlist}`)
    .then((res) => {
      dispatch({
        type: "GET_WATCHLIST_STOCKS",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getWatchlistStocks,
};
