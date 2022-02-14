import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

const WatchlistActions = ({ ...props }) => {
  return (
    <Box
      sx={{ minWidth: 120, display: "flex", justifyContent: "space-around" }}
    >
      <FormControl>
        <TextField
          id="standard-basic"
          placeholder="New Watchlist"
          variant="standard"
        />
      </FormControl>
    </Box>
  );
};

export default WatchlistActions;
