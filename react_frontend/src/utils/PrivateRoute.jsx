import { Outlet } from "react-router-dom";
import LogIn from "../pages/Login";

const PrivateRoute = ({ ...props }) => {
  const isAuthenticated = false;
  return isAuthenticated() ? <Outlet /> : <LogIn />;
};

export default PrivateRoute;
