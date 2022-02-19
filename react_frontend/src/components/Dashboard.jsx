import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../state/actions/index";
import Watchlist from "./Watchlist";
import WatchlistStocks from "./WatchlistStocks";
import WatchlistStocksControls from "./WatchlistStocksControls";
import Stock from "./stock";

const Dashboard = ({ ...props }) => {
  const authTokens = useSelector((state) => state.userReducer.user.tokens);
  const user = useSelector((state) => state.userReducer.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!authTokens) {
      dispatch(allActions.userActions.logout(user));
    }
  }, [authTokens, user, dispatch]);

  return (
    <Container>
      <Stock />
      <Box sx={{ overflow: "auto" }}>
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              marginTop: 8.3,
              width: 240,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <List>
            <Watchlist />
            <Divider />
            <WatchlistStocks />
            <Divider />
            <WatchlistStocksControls />
          </List>
        </Drawer>
      </Box>
    </Container>
  );
};

export default Dashboard;
