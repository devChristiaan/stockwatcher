import axios from "axios";
import jwt_decode from "jwt-decode";

const urlLogin = process.env.REACT_APP_LOGIN_URL;

// Login User
const login = (formData) => (dispatch) => {
  axios
    .post(urlLogin, formData)
    .then((res) => {
      dispatch({
        type: "LOGIN",
        payload: {
          user: jwt_decode(res.data.access).username,
          tokens: res.data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const logout = (user) => (dispatch) => {
  dispatch({
    type: "LOGOUT",
    payload: user,
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { login, logout };
