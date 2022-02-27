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

  const [selectedWatchlist, setSelectedWatchlist] = useState("");
  const [actionWatchlist, setActionWatchlist] = useState(false);
  const [newWatchlist, setNewWatchlist] = useState("");

  //Check if user is logged in. Fetch user watchlits and
  useEffect(() => {
    if (!authTokens) {
      dispatch(allActions.userActions.logout(user));
    }
    dispatch(allActions.watchlistActions.getWatchlists(authTokens));
    return () => {};
  }, [authTokens, user]);

  //Set first watchlist too selected watchlist in comp state
  useEffect(() => {
    if (watchlists.length >= 1) {
      setSelectedWatchlist(watchlists[0]?.name);
    }
  }, [watchlists]);

  //Set selected watchlist to global state
  useEffect(() => {
    dispatch(
      allActions.watchlistActions.selectedWatchlist(
        watchlists.find((watchlist) => watchlist.name === selectedWatchlist)
      )
    );
  }, [selectedWatchlist]);

  const handleChange = (event) => {
    setSelectedWatchlist(event.target.value);
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
        <Typography
          variant="watchlistTitle"
          sx={{ marginTop: "5px", marginLeft: "6px" }}
        >
          Watchlists
        </Typography>
        <WatchlistControls
          user={user}
          selectedWatchlist={selectedWatchlist}
          clearInput={clearInput}
          editMode={actionWatchlist}
          setEdit={setActionWatchlist}
          setNewWatchlistName={setNewWatchlist}
          newWatchlistName={newWatchlist}
        />
      </Box>
      {actionWatchlist ? (
        <WatchlistActions value={newWatchlist} setValue={setNewWatchlist} />
      ) : null}
      {!actionWatchlist ? (
        <WatchlistDisplay
          handleChange={handleChange}
          selectedWatchlist={selectedWatchlist}
          watchlists={watchlists}
        />
      ) : null}
    </>
  );
};

export default Watchlist;
