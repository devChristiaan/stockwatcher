import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WatchlistStockDisplay from "./WatchlistStockDisplay";
import allActions from "../state/actions";

const WatchlistStocks = ({ ...props }) => {
  const selectedWatchlist = useSelector(
    (state) => state.watchlistReducer.selectedWatchlist
  );
  const watchlistStocks = useSelector(
    (state) => state.watchlistStocksReducer.watchlistStocks
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedWatchlist) {
      dispatch(
        allActions.watchlistStocks.getWatchlistStocks(selectedWatchlist?.id)
      );
    }
  }, [selectedWatchlist]);

  return <WatchlistStockDisplay watchlistStocks={watchlistStocks} />;
};

export default WatchlistStocks;
