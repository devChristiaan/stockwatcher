import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../state/actions/index";
import WatchlistActions from "./WatchlistActions";
import WatchlistDisplay from "./WatchlistDisplay";

const Watchlist = () => {
  const watchlists = useSelector((state) => state.watchlistReducer.watchlists);
  const authTokens = useSelector((state) => state.userReducer.user.tokens);
  const user = useSelector((state) => state.userReducer.user.user);

  const dispatch = useDispatch();

  const [watchlist, setWatchlist] = useState("");
  const [editWatchlist, setEditWatchlist] = useState(false);

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

  if (!editWatchlist) {
    return <WatchlistDisplay />;
  } else {
    return <WatchlistActions />;
  }
};

export default Watchlist;
