import axiosInstance from "../../utils/axiosInstance";

const urlAPI = process.env.REACT_APP_API_URL;

// Get Watchlit Stocks
const getWatchlistStocks = (watchlist) => (dispatch) => {
  axiosInstance
    .get(`${urlAPI}watchliststocks/${watchlist}`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: "GET_WATCHLIST_STOCKS",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
// Add Watchlit Stocks
const addWatchlistStocks = (watchlistID, newTicker, user) => (dispatch) => {
  axiosInstance
    .post(`${urlAPI}watchliststocks/`, {
      ticker: newTicker,
      watchlist: watchlistID,
      user: user,
    })
    .then((res) => {
      dispatch({
        type: "ADD_WATCHLIST_STOCKS",
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
  addWatchlistStocks,
};
