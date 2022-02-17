import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

const WatchlistActions = ({ ...props }) => {
  const { value, setValue } = props;

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box
      sx={{ minWidth: 120, display: "flex", justifyContent: "space-around" }}
    >
      <FormControl>
        <TextField
          id="standard-basic"
          placeholder="New Watchlist"
          variant="standard"
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </FormControl>
    </Box>
  );
};

export default WatchlistActions;
