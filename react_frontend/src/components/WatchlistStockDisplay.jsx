import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../state/actions";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import WatchlistStockTickerInput from "./WatchlistStockTickerInput";

const WatchlistStockDisplay = ({ ...props }) => {
  const { watchlistStocks } = props;
  const dispatch = useDispatch();
  const [ticker, setTicker] = useState({});
  const [shownSetings, setShownSetings] = useState({});
  const [shownEdit, setShownEdit] = useState({});
  const user = useSelector((state) => state.userReducer.user.user);
  const watchlist = useSelector(
    (state) => state.watchlistReducer.selectedWatchlist
  );

  const deleteStock = (id) => {
    dispatch(allActions.watchlistStocks.deleteWatchlistStock(id));
  };

  const updateStock = (id) => {
    dispatch(
      allActions.watchlistStocks.editWatchlistStock(
        ticker.id,
        user,
        ticker.ticker,
        watchlist
      )
    );
    toggleEdit(ticker.id);
    setTicker({});
  };

  const clear = (id) => {
    setTicker({});
    setShownEdit((prevEditShown) => ({
      ...prevEditShown,
      [id]: !prevEditShown[id],
    }));
    setShownSetings((prevSettingsShown) => ({
      ...prevSettingsShown,
      [id]: !prevSettingsShown[id],
    }));
  };

  const toggleSettings = (id) => {
    setShownSetings((prevSettingsShown) => ({
      ...prevSettingsShown,
      [id]: !prevSettingsShown[id],
    }));
  };

  const toggleEdit = (id, ticker) => {
    setTicker({ id, ticker });
    setShownEdit((prevEditShown) => ({
      ...prevEditShown,
      [id]: !prevEditShown[id],
    }));
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        padding: ".5rem",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      {watchlistStocks ? (
        watchlistStocks.map((stock) => (
          <>
            <ListItemButton key={stock.id}>
              {!shownEdit[stock.id] ? (
                <ListItemText primary={stock.ticker} />
              ) : (
                <WatchlistStockTickerInput
                  ticker={ticker}
                  updateTicker={setTicker}
                />
              )}
              <Divider
                orientation="vertical"
                flexItem
                sx={{ marginRight: "10px" }}
              />
              <MoreVertIcon
                sx={{ width: "35px", marginRight: "5px" }}
                fontSize="small"
                onClick={() => toggleSettings(stock.id)}
              />
              {shownSetings[stock.id] ? (
                <Box
                  sx={{
                    width: "55px",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                  }}
                >
                  {!shownEdit[stock.id] ? (
                    <>
                      <EditIcon
                        fontSize="small"
                        sx={{ marginRight: "15px" }}
                        onClick={(e) => toggleEdit(stock.id, stock.ticker)}
                      />
                      <DeleteIcon
                        fontSize="small"
                        onClick={(e) => deleteStock(stock.id)}
                      />
                    </>
                  ) : (
                    <>
                      <DoneIcon
                        fontSize="small"
                        sx={{ marginRight: "15px" }}
                        onClick={updateStock}
                      />
                      <ClearIcon
                        fontSize="small"
                        onClick={(e) => clear(stock.id)}
                      />
                    </>
                  )}
                </Box>
              ) : null}
            </ListItemButton>
            <Divider
              variant="middle"
              sx={{ marginTop: "5px", MarginBottom: "5px" }}
            />
          </>
        ))
      ) : (
        <Typography>
          You do not have any stocks in your watchlist yet
        </Typography>
      )}
    </Box>
  );
};

export default WatchlistStockDisplay;
