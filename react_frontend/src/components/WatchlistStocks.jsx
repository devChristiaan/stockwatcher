import { useEffect } from "react";
import WatchlistStockDisplay from "./WatchlistStockDisplay";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../state/actions";

const WatchlistStocks = ({ ...props }) => {
  const watchlists = useSelector((state) => state.watchlistReducer.watchlists);
  const selectedWatchlist = useSelector(
    (state) => state.watchlistReducer.selectedWatchlist
  );
  const watchlistStocks = useSelector(
    (state) => state.watchlistStocksReducer.watchlistStocks
  );
  const dispatch = useDispatch();

  console.log(selectedWatchlist);

  useEffect(() => {
    if (watchlists && selectedWatchlist) {
      dispatch(
        allActions.watchlistStocks.getWatchlistStocks(selectedWatchlist.id)
      );
    }
  }, [selectedWatchlist, watchlists]);

  return <WatchlistStockDisplay />;
};

export default WatchlistStocks;
