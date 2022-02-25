import { useState } from "react";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const WatchlistStockDisplay = ({ ...props }) => {
  const { watchlistStocks } = props;
  const [settings, setSettings] = useState(true);

  // const changeToSettings = () => {
  //   setSettings(!settings);
  // };

  const [shownSetings, setShownSetings] = useState({});

  const toggleSettings = (id) => {
    setSettings(!settings);
    setShownSetings((prevSettingsShown) => ({
      ...prevSettingsShown,
      [id]: !prevSettingsShown[id],
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
              <ListItemText primary={stock.ticker} />
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
                  <EditIcon fontSize="small" sx={{ marginRight: "15px" }} />
                  <DeleteIcon fontSize="small" />
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
