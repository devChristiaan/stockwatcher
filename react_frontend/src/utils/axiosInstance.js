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
  authTokens = store.getState().userReducer.user.tokens;
  req.headers.Authorization = `Bearer ${authTokens.access}`;

  const user = jwt_decode(authTokens.access);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  console.log(isExpired);

  if (!isExpired) return req;

  allActions.userActions.refresh(authTokens.refresh);

  authTokens = store.getState().userReducer.user.tokens;

  req.headers.Authorization = `Bearer ${authTokens.access}`;
  return req;
});

export default axiosInstance;
