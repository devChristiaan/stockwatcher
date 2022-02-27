const setTicker = (ticker) => (dispatch) => {
  dispatch({
    type: "SET_TICKER",
    payload: ticker,
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { setTicker };
