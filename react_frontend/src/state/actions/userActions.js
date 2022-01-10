import axios from "axios";

const urlAPI = process.env.REACT_APP_API_URL;

// Get Watchlits
const login = (user) => (dispatch) => {
  axios
    .post(`${urlAPI}auth/token/`)
    .then((res) => {
      dispatch({
        type: "USER",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { login };
