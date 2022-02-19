import { useState } from "react";
import Box from "@mui/material/Box";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import DoneIcon from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../state/actions";

const WatchlistStocksControls = ({ ...props }) => {
  const [addStock, setAddStock] = useState(false);
  const [newTicker, setNewTicker] = useState("");

  const dispatch = useDispatch();

  const selectedWatchlist = useSelector(
    (state) => state.watchlistReducer.selectedWatchlist?.id
  );
  const user = useSelector((state) => state.userReducer.user.user);

  const handleChange = (e) => {
    setNewTicker(e.target.value.toUpperCase());
  };

  const addNewTicker = () => {
    dispatch(
      allActions.watchlistStocks.addWatchlistStocks(
        selectedWatchlist,
        newTicker,
        user
      )
    );
    setNewTicker("");
    setAddStock(false);
  };

  const handleAddChange = () => {
    setAddStock(true);
  };

  const handleAddChangeCancel = () => {
    setAddStock(false);
    setNewTicker("");
  };

  return (
    <>
      {!addStock ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
        >
          <AddCircleOutlineSharpIcon
            sx={{ color: "grey", marginRight: "12px" }}
            onClick={handleAddChange}
          />
          <Typography>Add Ticker to Watchlist</Typography>
        </Box>
      ) : (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
        >
          <DoneIcon
            sx={{ color: "grey", marginRight: "12px", marginTop: "5px" }}
            onClick={addNewTicker}
          />
          <FormControl>
            <TextField
              sx={{ width: "145px" }}
              id="standard-basic"
              placeholder="Add Ticker"
              variant="standard"
              value={newTicker}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <HighlightOffSharpIcon
            sx={{ color: "grey", marginLeft: "12px", marginTop: "5px" }}
            onClick={handleAddChangeCancel}
          />
        </Box>
      )}
    </>
  );
};

export default WatchlistStocksControls;
