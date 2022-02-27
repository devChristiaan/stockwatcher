import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Search from "./Search";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../state/actions/index";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(allActions.userActions.logout(user));
    navigate("/", { replace: true });
  };

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          direction: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Link to="/">
            <Typography variant="h6">Stockwatchers</Typography>
          </Link>
          {user.user ? (
            <Link to="/dashboard">
              <Typography variant="navMenuItemUser" sx={{ marginLeft: "2rem" }}>
                Dashboard
              </Typography>
            </Link>
          ) : null}
        </Box>
        {user.user ? (
          <>
            <Search />
            <Box>
              <Typography variant="navMenuItemUser">{user.user}</Typography>
              <Button color="inherit" onClick={logout}>
                LogOut
              </Button>
            </Box>
          </>
        ) : (
          <Box>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
