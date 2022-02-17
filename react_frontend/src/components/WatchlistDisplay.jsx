import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const WatchlistDisplay = ({ ...props }) => {
  const { handleChange, watchlists, selectedWatchlist } = props;

  return (
    <Box
      sx={{
        minWidth: 120,
        padding: ".5rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <FormControl fullWidth variant="outlined">
        <Select
          sx={{
            fontSize: "1rem",
            textAlign: "center",
          }}
          value={selectedWatchlist}
          onChange={(e) => handleChange(e)}
        >
          {watchlists ? (
            watchlists.map((watchlist) => (
              <MenuItem
                variant="watchlist"
                key={watchlist.id}
                value={watchlist.name}
              >
                {watchlist.name}
              </MenuItem>
            ))
          ) : (
            <Typography>You do not have any watchlist yet</Typography>
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default WatchlistDisplay;
