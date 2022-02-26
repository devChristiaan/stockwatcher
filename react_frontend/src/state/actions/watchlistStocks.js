import axiosInstance from "../../utils/axiosInstance";

const urlAPI = process.env.REACT_APP_API_URL;

// Get Watchlist Stocks
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
// Add Watchlist Stock
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
// Delete Watchlist Stock
const deleteWatchlistStock = (id) => (dispatch) => {
  axiosInstance
    .delete(`${urlAPI}watchliststocks/${id}/`)
    .then((res) => {
      dispatch({
        type: "DELETE_WATCHLIST_STOCK",
        payload: id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const editWatchlistStock = (id, user, newTicker, watchlistID) => (dispatch) => {
  axiosInstance
    .put(`${urlAPI}watchliststocks/?id=${id}`, {
      user: user,
      ticker: newTicker,
      watchlistID: watchlistID.id,
    })
    .then((res) => {
      dispatch({
        type: "EDIT_WATCHLIST_STOCK",
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
  deleteWatchlistStock,
  editWatchlistStock,
};
