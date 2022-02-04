const setTicker = (ticker) => (dispatch) => {
  dispatch({
    type: "SETTICKER",
    payload: ticker,
  });
};

export default { setTicker };
