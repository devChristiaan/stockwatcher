import { useState } from "react";
import { useDispatch } from "react-redux";
import allActions from "../state/actions";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import WatchlistStockTickerInput from "./WatchlistStockTickerInput";

const WatchlistStockDisplay = ({ ...props }) => {
  const { watchlistStocks } = props;
  const dispatch = useDispatch();
  const [ticker, setTicker] = useState({});
  const [shownSetings, setShownSetings] = useState({});
  const [shownEdit, setShownEdit] = useState({});

  const deleteStock = (id) => {
    dispatch(allActions.watchlistStocks.deleteWatchlistStock(id));
  };

  const updateStock = (id) => {
    dispatch(allActions.watchlistStocks.editWatchlistStock(id));
    toggleEdit(id);
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

  console.log(ticker);

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
                <Box sx={{ width: "55px" }}>
                  <EditIcon
                    fontSize="small"
                    sx={{ marginRight: "15px" }}
                    onClick={(e) => toggleEdit(stock.id, stock.ticker)}
                  />
                  <DeleteIcon
                    fontSize="small"
                    onClick={(e) => deleteStock(stock.id)}
                  />
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
