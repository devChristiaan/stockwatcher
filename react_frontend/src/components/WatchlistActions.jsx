import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

const WatchlistActions = ({ ...props }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <TextField id="standard-basic" variant="standard" />
      </FormControl>
    </Box>
  );
};

export default WatchlistActions;
