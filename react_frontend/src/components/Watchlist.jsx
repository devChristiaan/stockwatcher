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
  const [editWatchlist, setEditWatchlist] = useState(false);
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

  const editSelectedWatchlist = () => {
    setEditWatchlist(true);
  };

  const deleteSelectedWatchlist = () => {
    setEditWatchlist(true);
    setEditWatchlist(false);
  };

  const addWatchlist = () => {
    setEditWatchlist(true);
    setEditWatchlist(false);
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
          edit={editSelectedWatchlist}
          remove={deleteSelectedWatchlist}
          add={addWatchlist}
          editMode={editWatchlist}
          setEdit={setEditWatchlist}
          clearInput={setNewWatchlist}
        />
      </Box>
      {editWatchlist ? <WatchlistActions value={newWatchlist} /> : null}
      {!editWatchlist ? (
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
