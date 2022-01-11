import { Outlet } from "react-router-dom";
import LogIn from "../pages/Login";
import { useSelector } from "react-redux";

const PrivateRoute = ({ ...props }) => {
  const user = useSelector((state) => state.userReducer.user);

  return user.access ? <Outlet /> : <LogIn />;
};

export default PrivateRoute;
