import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const WatchlistStockTickerInput = ({ ...props }) => {
  const { ticker, updateTicker } = props;

  const handleChange = (e) => {
    updateTicker({ ...ticker, ticker: e.target.value });
  };
  return (
    <Box
      sx={{
        width: "100px",
        marginRight: "15px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <FormControl>
        <TextField
          id="standard-basic"
          variant="standard"
          value={ticker.ticker}
          onChange={(e) => handleChange(e)}
        />
      </FormControl>
    </Box>
  );
};

export default WatchlistStockTickerInput;
