import { useSelector } from "react-redux";
import Chart from "./Chart";
import CompanyOverview from "./CompanyOverview";
import Grid from "@mui/material/Grid";

const Stock = () => {
  const ticker = useSelector((state) => state.stockReducer.ticker);
  const apiKey = process.env.REACT_APP_ALPHA_API_KEY;

  return (
    <Grid>
      <h1>Stock : {ticker}</h1>
      <Chart item ticker={ticker} apiKey={apiKey} />
      <CompanyOverview item ticker={ticker} apiKey={apiKey} />
    </Grid>
  );
};

export default Stock;
