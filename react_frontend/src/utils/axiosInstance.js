import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import store from "../state/store";
import allActions from "../state/actions";

let authTokens = store.getState().userReducer.user;

const axiosInstance = axios.create({
  headers: { Authorization: `Bearer ${authTokens?.access}` },
});

axiosInstance.interceptors.request.use(async (req) => {
  //Get updated State
  authTokens = store.getState().userReducer.user.tokens;
  req.headers.Authorization = `Bearer ${authTokens.access}`;

  //Decode token and check if expires
  const user = jwt_decode(authTokens.access);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (!isExpired) return req;

  //Run refresh action and refresh token state
  allActions.userActions.refresh(authTokens.refresh);
  authTokens = store.getState().userReducer.user.tokens;

  req.headers.Authorization = `Bearer ${authTokens.access}`;
  return req;
});

export default axiosInstance;
