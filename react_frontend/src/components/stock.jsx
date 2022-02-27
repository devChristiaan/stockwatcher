import { useSelector } from "react-redux";
import Chart from "./Chart";
import CompanyOverview from "./CompanyOverview";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Stock = () => {
  const ticker = useSelector((state) => state.stockReducer.ticker);
  const apiKey = process.env.REACT_APP_ALPHA_API_KEY;

  return (
    <Grid
      sx={{
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
      }}
      container
      paddingY={3}
    >
      <Box sx={{ width: "100%", marginBottom: "1rem" }}>
        <Typography component="h1" variant="primary">
          {ticker}
        </Typography>
      </Box>
      <CompanyOverview item ticker={ticker} apiKey={apiKey} />
      <Chart item ticker={ticker} apiKey={apiKey} />
    </Grid>
  );
};

export default Stock;
