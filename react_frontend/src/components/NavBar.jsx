import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";
import Search from "./Search";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../state/actions/index";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(allActions.userActions.logout(user));
    navigate("/", { replace: true });
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none" }}>
              Stockwatchers
            </Link>
          </Typography>
          {user.user ? (
            <>
              <Search className={classes.searchBar} />
              <Typography>{user.user}</Typography>
              <Button color="inherit" onClick={logout}>
                LogOut
              </Button>
            </>
          ) : (
            <Button color="inherit">
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
