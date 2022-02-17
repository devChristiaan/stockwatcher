import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import allActions from "../state/actions/index";
import WatchlistActions from "./WatchlistActions";
import WatchlistDisplay from "./WatchlistDisplay";
import WatchlistControls from "./WatchlistControls";

const Watchlist = () => {
  const watchlists = useSelector((state) => state.watchlistReducer.watchlists);
  const authTokens = useSelector((state) => state.userReducer.user.tokens);
  const user = useSelector((state) => state.userReducer.user.user);

  const dispatch = useDispatch();

  const [watchlist, setWatchlist] = useState("");
  const [actionWatchlist, setActionWatchlist] = useState(false);
  const [newWatchlist, setNewWatchlist] = useState("");

  useEffect(() => {
    if (!authTokens) {
      dispatch(allActions.userActions.logout(user));
    }
    dispatch(allActions.watchlistActions.getWatchlists(authTokens));
    setWatchlist(watchlists[0]?.name);
  }, [authTokens, user, dispatch]);

  useEffect(() => {
    if (watchlists.length >= 1) {
      setWatchlist(watchlists[0]?.name);
    }
  }, [watchlists]);

  const handleChange = (event) => {
    setWatchlist(event.target.value);
  };

  const clearInput = () => {
    setNewWatchlist("");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: ".5rem",
        }}
      >
        <Typography>Watchlists</Typography>
        <WatchlistControls
          user={user}
          watchlists={watchlists}
          selectedWatchlist={watchlist}
          clearInput={clearInput}
          editMode={actionWatchlist}
          setEdit={setActionWatchlist}
          newWatchlist={newWatchlist}
        />
      </Box>
      {actionWatchlist ? (
        <WatchlistActions value={newWatchlist} setValue={setNewWatchlist} />
      ) : null}
      {!actionWatchlist ? (
        <WatchlistDisplay
          handleChange={handleChange}
          watchlist={watchlist}
          watchlists={watchlists}
        />
      ) : null}
    </>
  );
};

export default Watchlist;
