import { useSelector } from "react-redux";
import Chart from "./Chart";
import CompanyOverview from "./CompanyOverview";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const Stock = () => {
  const ticker = useSelector((state) => state.stockReducer.ticker);
  const apiKey = process.env.REACT_APP_ALPHA_API_KEY;

  return (
    <Grid
      sx={{
        display: "flex",
        direction: "row",
        justifyContent: "center",
        marginTop: "7rem",
        marginLeft: "-4rem",
      }}
      container
    >
      <CompanyOverview item ticker={ticker} apiKey={apiKey} />
      <Divider
        orientation="vertical"
        flexItem
        sx={{ marginLeft: 4, marginRight: 4 }}
      />
      <Chart item ticker={ticker} apiKey={apiKey} />
    </Grid>
  );
};

export default Stock;
