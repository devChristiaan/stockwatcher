import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SettingsIcon from "@mui/icons-material/Settings";

const WatchlistStockDisplay = ({ ...props }) => {
  const { watchlistStocks } = props;

  const changeToSettings = () => {};

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
      {watchlistStocks.length > 0 ? (
        watchlistStocks.map((stock) => (
          <>
            <ListItemButton key={stock.id}>
              <ListItemText primary={stock.ticker} />
              <Divider
                orientation="vertical"
                flexItem
                sx={{ marginRight: "10px" }}
              />
              <SettingsIcon fontSize="small" onMouseOver={changeToSettings} />
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
