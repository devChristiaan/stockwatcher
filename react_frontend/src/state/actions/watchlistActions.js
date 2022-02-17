import axiosInstance from "../../utils/axiosInstance";

const urlAPI = process.env.REACT_APP_API_URL;

// Get Watchlits
const getWatchlists = (authTokens) => (dispatch) => {
  axiosInstance
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

// Add Watchlit
const addWatchlist = (user, newWatchlist) => (dispatch) => {
  axiosInstance
    .post(`${urlAPI}watchlist/`, {
      user: user,
      name: newWatchlist,
    })
    .then((res) => {
      dispatch({
        type: "ADD_WATCHLIST",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete Watchlit
const deleteWatchlist = (id) => (dispatch) => {
  axiosInstance
    .delete(`${urlAPI}watchlist/${id}/`)
    .then((res) => {
      dispatch({
        type: "DELETE_WATCHLIST",
        payload: id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Edit Watchlit
const editWatchlist = (id, user, newWatchlistName) => (dispatch) => {
  axiosInstance
    .put(`${urlAPI}watchlist/${id}/`, {
      user: user,
      name: newWatchlistName,
    })
    .then((res) => {
      dispatch({
        type: "EDIT_WATCHLISTS",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getWatchlists,
  addWatchlist,
  deleteWatchlist,
  editWatchlist,
};
