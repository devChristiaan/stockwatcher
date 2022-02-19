import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const WatchlistStockDisplay = ({ ...props }) => {
  const { watchlistStocks } = props;

  return (
    <Box
      sx={{
        minWidth: 120,
        padding: ".5rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {watchlistStocks.length > 0 ? (
        watchlistStocks.map((stock) => (
          <ListItemButton key={stock.id}>
            <ListItemText primary={stock.ticker} />
          </ListItemButton>
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
